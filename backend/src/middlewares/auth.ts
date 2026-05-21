import type { NextFunction, Request, Response } from 'express';
import type { Role } from '@prisma/client';
import { prisma } from '../prisma/client.js';
import { sendError } from '../utils/apiResponse.js';
import { verifyAccessToken } from '../utils/tokens.js';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

  if (!token) return sendError(res, 'Missing access token', 401);

  try {
    const payload = verifyAccessToken(token);
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, publicId: true, email: true, role: true, isActive: true }
    });

    if (!user || !user.isActive) return sendError(res, 'User is inactive or not found', 401);

    req.user = {
      id: user.id,
      publicId: user.publicId,
      email: user.email,
      role: user.role
    };
    return next();
  } catch {
    return sendError(res, 'Invalid or expired access token', 401);
  }
}

export function requireRoles(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return sendError(res, 'Authentication required', 401);
    if (!roles.includes(req.user.role)) return sendError(res, 'Insufficient permissions', 403);
    return next();
  };
}
