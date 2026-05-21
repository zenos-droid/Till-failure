import { Router } from 'express';
import { AppointmentStatus, Role } from '@prisma/client';
import { scheduleAppointmentHandler, updateAppointmentStatusHandler } from '../controllers/admin.controller.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { authenticate, requireRoles } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { appointmentSchema, appointmentStatusSchema } from '../validators/admin.validators.js';
import { uuidParam } from '../validators/common.validators.js';

export const receptionistRouter = Router();

receptionistRouter.use(authenticate, requireRoles(Role.RECEPTIONIST, Role.ADMIN));

receptionistRouter.post('/appointments', validate(appointmentSchema), asyncHandler(scheduleAppointmentHandler));
receptionistRouter.patch('/appointments/:id/cancel', validate(uuidParam), asyncHandler((req, res) => {
  req.body.status = AppointmentStatus.CANCELLED;
  return updateAppointmentStatusHandler(req, res);
}));
receptionistRouter.patch('/appointments/:id/check-in', validate(uuidParam), asyncHandler((req, res) => {
  req.body.status = AppointmentStatus.CHECKED_IN;
  return updateAppointmentStatusHandler(req, res);
}));
receptionistRouter.patch('/appointments/:id/status', validate(uuidParam.merge(appointmentStatusSchema)), asyncHandler(updateAppointmentStatusHandler));
