// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as Express from 'express';
import type { User } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
