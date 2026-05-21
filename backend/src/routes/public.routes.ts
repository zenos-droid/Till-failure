import { Router } from 'express';
import { healthHandler, publicMembershipsHandler, publicScheduleHandler, publicTrainersHandler } from '../controllers/public.controller.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const publicRouter = Router();

publicRouter.get('/health', asyncHandler(healthHandler));
publicRouter.get('/trainers', asyncHandler(publicTrainersHandler));
publicRouter.get('/memberships', asyncHandler(publicMembershipsHandler));
publicRouter.get('/schedule', asyncHandler(publicScheduleHandler));
