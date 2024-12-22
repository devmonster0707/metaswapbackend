import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';

export const SuperValidationMiddleware = () => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    if (req.user.userRole === 'SUPER') {
      next();
    } else {
      return res.status(403).json({ kind: 'FORBIDDEN', message: 'forbidden' });
    }
  }
}