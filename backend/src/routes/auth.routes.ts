import { Router } from 'express';
import { loginHandler, logoutHandler, meHandler, refreshHandler, signupHandler } from '../controllers/auth.controller.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { authenticate } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema, refreshSchema, signupSchema } from '../validators/auth.validators.js';

export const authRouter = Router();

authRouter.post('/signup', validate(signupSchema), asyncHandler(signupHandler));
authRouter.post('/login', validate(loginSchema), asyncHandler(loginHandler));
authRouter.post('/refresh', validate(refreshSchema), asyncHandler(refreshHandler));
authRouter.post('/logout', asyncHandler(logoutHandler));
authRouter.get('/me', authenticate, asyncHandler(meHandler));
