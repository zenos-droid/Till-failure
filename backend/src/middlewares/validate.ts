import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject, ZodError } from 'zod';
import { sendError } from '../utils/apiResponse.js';

function formatZodError(error: ZodError) {
  return error.issues.map((issue) => ({
    path: issue.path.join('.'),
    message: issue.message
  }));
}

export function validate(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!parsed.success) {
      return sendError(res, 'Validation failed', 400, formatZodError(parsed.error));
    }

    req.body = parsed.data.body ?? req.body;
    req.params = parsed.data.params ?? req.params;
    req.query = parsed.data.query ?? req.query;
    return next();
  };
}
