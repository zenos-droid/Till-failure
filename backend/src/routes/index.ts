import { Router } from 'express';
import { adminRouter } from './admin.routes.js';
import { authRouter } from './auth.routes.js';
import { publicRouter } from './public.routes.js';
import { receptionistRouter } from './receptionist.routes.js';
import { trainerRouter } from './trainer.routes.js';

export const router = Router();

router.use(publicRouter);
router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/trainer', trainerRouter);
router.use('/receptionist', receptionistRouter);
