import type { Request, Response } from 'express';
import { isProduction } from '../config/env.js';
import { login, logout, refresh, signupMember } from '../services/auth.service.js';
import { sendSuccess } from '../utils/apiResponse.js';

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? 'none' as const : 'lax' as const,
  path: '/api/auth/refresh'
};

export async function signupHandler(req: Request, res: Response) {
  const result = await signupMember(req.body);
  res.cookie('refreshToken', result.tokens.refreshToken, cookieOptions);
  return sendSuccess(res, result, 201);
}

export async function loginHandler(req: Request, res: Response) {
  const result = await login(req.body);
  res.cookie('refreshToken', result.tokens.refreshToken, cookieOptions);
  return sendSuccess(res, result);
}

export async function refreshHandler(req: Request, res: Response) {
  const token = req.body.refreshToken ?? req.cookies?.refreshToken;
  const result = await refresh(token);
  res.cookie('refreshToken', result.tokens.refreshToken, cookieOptions);
  return sendSuccess(res, result);
}

export async function logoutHandler(req: Request, res: Response) {
  const token = req.body.refreshToken ?? req.cookies?.refreshToken;
  await logout(token);
  res.clearCookie('refreshToken', cookieOptions);
  return sendSuccess(res, { loggedOut: true });
}

export async function meHandler(req: Request, res: Response) {
  return sendSuccess(res, { user: req.user });
}
