import { z } from 'zod';

export const uuidParam = z.object({
  params: z.object({
    id: z.string().uuid('id must be a database UUID, not a slug/publicId')
  })
});

export const publicIdParam = z.object({
  params: z.object({
    publicId: z.string().min(2)
  })
});

export const paginationQuery = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20)
  }).partial().default({})
});
