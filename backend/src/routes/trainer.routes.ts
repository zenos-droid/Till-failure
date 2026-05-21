import { Router } from 'express';
import { Role } from '@prisma/client';
import { completeAppointmentHandler, ownAppointmentsHandler, updateScheduleHandler } from '../controllers/trainer.controller.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { authenticate, requireRoles } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { completeAppointmentSchema, trainerScheduleSchema } from '../validators/admin.validators.js';

export const trainerRouter = Router();

trainerRouter.use(authenticate, requireRoles(Role.TRAINER, Role.ADMIN));

trainerRouter.get('/appointments', asyncHandler(ownAppointmentsHandler));
trainerRouter.patch('/appointments/:id/complete', validate(completeAppointmentSchema), asyncHandler(completeAppointmentHandler));
trainerRouter.put('/schedule', validate(trainerScheduleSchema), asyncHandler(updateScheduleHandler));
