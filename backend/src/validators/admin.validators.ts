import { z } from 'zod';
import { AppointmentStatus } from '@prisma/client';

export const createTrainerSchema = z.object({
  body: z.object({
    fullName: z.string().min(2),
    email: z.string().email().toLowerCase(),
    password: z.string().min(8),
    specialty: z.string().min(2),
    experience: z.string().min(2),
    schedule: z.unknown().default({}),
    bio: z.string().min(2)
  })
});

export const createReceptionistSchema = z.object({
  body: z.object({
    fullName: z.string().min(2),
    email: z.string().email().toLowerCase(),
    password: z.string().min(8)
  })
});

export const upsertMembershipSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    price: z.coerce.number().nonnegative(),
    duration: z.coerce.number().int().positive(),
    description: z.string().optional(),
    features: z.unknown().optional(),
    isActive: z.boolean().optional()
  })
});

export const appointmentSchema = z.object({
  body: z.object({
    memberId: z.string().uuid(),
    trainerId: z.string().uuid(),
    scheduledDate: z.coerce.date(),
    status: z.nativeEnum(AppointmentStatus).optional(),
    notes: z.string().optional()
  })
});

export const appointmentStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(AppointmentStatus),
    notes: z.string().optional()
  })
});

export const trainerScheduleSchema = z.object({
  body: z.object({
    schedule: z.unknown()
  })
});

export const completeAppointmentSchema = z.object({
  params: z.object({
    id: z.string().uuid('id must be a database UUID, not a slug/publicId')
  }),
  body: z.object({
    notes: z.string().optional()
  }).default({})
});
