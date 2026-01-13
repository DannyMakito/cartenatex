import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header('x-admin-key');

  if (!apiKey || apiKey !== config.adminApiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return next();
};


