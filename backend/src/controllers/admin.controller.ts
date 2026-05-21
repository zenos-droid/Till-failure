import type { Request, Response } from 'express';
import * as admin from '../services/admin.service.js';
import { sendSuccess } from '../utils/apiResponse.js';

export async function createTrainerHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.createTrainer(req.body), 201);
}

export async function deactivateTrainerHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.deactivateTrainer(req.params.id));
}

export async function createReceptionistHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.createReceptionist(req.body), 201);
}

export async function deactivateEmployeeHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.deactivateEmployee(req.params.id));
}

export async function listTrainersHandler(_req: Request, res: Response) {
  return sendSuccess(res, await admin.listTrainers());
}

export async function listMembershipsHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.listMemberships(req.query.includeInactive === 'true'));
}

export async function createMembershipHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.upsertMembership(undefined, req.body), 201);
}

export async function updateMembershipHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.upsertMembership(req.params.id, req.body));
}

export async function scheduleAppointmentHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.scheduleAppointment(req.body), 201);
}

export async function updateAppointmentStatusHandler(req: Request, res: Response) {
  return sendSuccess(res, await admin.updateAppointmentStatus(req.params.id, req.body.status, req.body.notes));
}

export async function analyticsHandler(_req: Request, res: Response) {
  return sendSuccess(res, await admin.analytics());
}
