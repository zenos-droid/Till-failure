import { Router } from 'express';
import { Role } from '@prisma/client';
import {
  analyticsHandler,
  createMembershipHandler,
  createReceptionistHandler,
  createTrainerHandler,
  deactivateEmployeeHandler,
  deactivateTrainerHandler,
  listMembershipsHandler,
  listTrainersHandler,
  scheduleAppointmentHandler,
  updateAppointmentStatusHandler,
  updateMembershipHandler
} from '../controllers/admin.controller.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { authenticate, requireRoles } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { appointmentSchema, appointmentStatusSchema, createReceptionistSchema, createTrainerSchema, upsertMembershipSchema } from '../validators/admin.validators.js';
import { uuidParam } from '../validators/common.validators.js';

export const adminRouter = Router();

adminRouter.use(authenticate, requireRoles(Role.ADMIN));

adminRouter.get('/analytics', asyncHandler(analyticsHandler));
adminRouter.get('/trainers', asyncHandler(listTrainersHandler));
adminRouter.post('/trainers', validate(createTrainerSchema), asyncHandler(createTrainerHandler));
adminRouter.patch('/trainers/:id/deactivate', validate(uuidParam), asyncHandler(deactivateTrainerHandler));
adminRouter.post('/receptionists', validate(createReceptionistSchema), asyncHandler(createReceptionistHandler));
adminRouter.patch('/employees/:id/deactivate', validate(uuidParam), asyncHandler(deactivateEmployeeHandler));
adminRouter.get('/memberships', asyncHandler(listMembershipsHandler));
adminRouter.post('/memberships', validate(upsertMembershipSchema), asyncHandler(createMembershipHandler));
adminRouter.put('/memberships/:id', validate(uuidParam.merge(upsertMembershipSchema)), asyncHandler(updateMembershipHandler));
adminRouter.post('/appointments', validate(appointmentSchema), asyncHandler(scheduleAppointmentHandler));
adminRouter.patch('/appointments/:id/status', validate(uuidParam.merge(appointmentStatusSchema)), asyncHandler(updateAppointmentStatusHandler));
