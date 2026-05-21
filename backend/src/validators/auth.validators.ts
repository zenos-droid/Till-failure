import { z } from 'zod';

const password = z.string().min(8).regex(/[A-Z]/, 'password needs an uppercase letter').regex(/[0-9]/, 'password needs a number');

export const signupSchema = z.object({
  body: z.object({
    fullName: z.string().min(2),
    email: z.string().email().toLowerCase(),
    password,
    membershipPlanId: z.string().uuid().optional()
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(1)
  })
});

export const refreshSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(20).optional()
  }).default({})
});
