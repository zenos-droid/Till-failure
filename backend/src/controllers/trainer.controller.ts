import type { Request, Response } from 'express';
import { completeOwnAppointment, ownAppointments, updateOwnSchedule } from '../services/trainer.service.js';
import { sendSuccess } from '../utils/apiResponse.js';

export async function ownAppointmentsHandler(req: Request, res: Response) {
  return sendSuccess(res, await ownAppointments(req.user!.id));
}

export async function completeAppointmentHandler(req: Request, res: Response) {
  return sendSuccess(res, await completeOwnAppointment(req.user!.id, req.params.id, req.body.notes));
}

export async function updateScheduleHandler(req: Request, res: Response) {
  return sendSuccess(res, await updateOwnSchedule(req.user!.id, req.body.schedule));
}
