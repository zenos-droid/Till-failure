import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import type { Role } from '@prisma/client';
import { env } from '../config/env.js';

export type JwtPayload = {
  sub: string;
  publicId: string;
  role: Role;
  email: string;
};

export function signAccessToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '15m' });
}

export function signRefreshToken(payload: JwtPayload) {
  return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload & jwt.JwtPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as JwtPayload & jwt.JwtPayload;
}

export function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export function refreshExpiryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date;
}
