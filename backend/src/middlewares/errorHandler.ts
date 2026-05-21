import type { NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { sendError } from '../utils/apiResponse.js';

export function notFound(req: Request, res: Response) {
  return sendError(res, 'Route not found: ' + req.method + ' ' + req.originalUrl, 404);
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') return sendError(res, 'Unique field already exists', 409, err.meta);
    if (err.code === 'P2025') return sendError(res, 'Record not found', 404);
  }

  if (err instanceof Error) return sendError(res, err.message, 500);
  return sendError(res, 'Unexpected server error', 500);
}
