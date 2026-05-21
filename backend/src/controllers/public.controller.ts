import type { Request, Response } from 'express';
import { publicMemberships, publicSchedule, publicTrainers } from '../services/public.service.js';
import { sendSuccess } from '../utils/apiResponse.js';

export async function healthHandler(_req: Request, res: Response) {
  return sendSuccess(res, { status: 'ok', service: 'till-failure-backend' });
}

export async function publicTrainersHandler(_req: Request, res: Response) {
  return sendSuccess(res, await publicTrainers());
}

export async function publicMembershipsHandler(_req: Request, res: Response) {
  return sendSuccess(res, await publicMemberships());
}

export async function publicScheduleHandler(_req: Request, res: Response) {
  return sendSuccess(res, await publicSchedule());
}
