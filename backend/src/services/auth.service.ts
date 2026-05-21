import { Role } from '@prisma/client';
import { prisma } from '../prisma/client.js';
import { hashPassword, verifyPassword } from '../utils/password.js';
import { hashToken, refreshExpiryDate, signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/tokens.js';
import { toPublicId } from '../utils/publicId.js';
import { presentMember, presentUser } from './presenter.service.js';

export async function signupMember(input: { fullName: string; email: string; password: string; membershipPlanId?: string }) {
  const passwordHash = await hashPassword(input.password);
  const user = await prisma.user.create({
    data: {
      publicId: toPublicId('usr', input.email.split('@')[0]),
      fullName: input.fullName,
      email: input.email,
      passwordHash,
      role: Role.MEMBER,
      member: {
        create: {
          publicId: toPublicId('mem', input.fullName),
          membershipPlanId: input.membershipPlanId
        }
      }
    },
    include: { member: { include: { membershipPlan: true } } }
  });

  const tokens = await issueTokens(user);
  return { user: presentUser(user), member: user.member ? presentMember(user.member) : null, tokens };
}

export async function login(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email: input.email } });
  if (!user || !user.isActive) throw new Error('Invalid credentials');

  const matches = await verifyPassword(input.password, user.passwordHash);
  if (!matches) throw new Error('Invalid credentials');

  return { user: presentUser(user), tokens: await issueTokens(user) };
}

export async function logout(refreshToken?: string) {
  if (!refreshToken) return;
  await prisma.refreshToken.updateMany({
    where: { tokenHash: hashToken(refreshToken), revokedAt: null },
    data: { revokedAt: new Date() }
  });
}

export async function refresh(refreshToken: string) {
  const payload = verifyRefreshToken(refreshToken);
  const stored = await prisma.refreshToken.findUnique({ where: { tokenHash: hashToken(refreshToken) } });
  if (!stored || stored.revokedAt || stored.expiresAt < new Date()) throw new Error('Invalid refresh token');

  await prisma.refreshToken.update({ where: { id: stored.id }, data: { revokedAt: new Date() } });

  const user = await prisma.user.findUniqueOrThrow({ where: { id: payload.sub } });
  if (!user.isActive) throw new Error('User is inactive');
  return { user: presentUser(user), tokens: await issueTokens(user) };
}

async function issueTokens(user: { id: string; publicId: string; role: Role; email: string }) {
  const payload = { sub: user.id, publicId: user.publicId, role: user.role, email: user.email };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  await prisma.refreshToken.create({
    data: {
      tokenHash: hashToken(refreshToken),
      userId: user.id,
      expiresAt: refreshExpiryDate()
    }
  });

  return { accessToken, refreshToken };
}
