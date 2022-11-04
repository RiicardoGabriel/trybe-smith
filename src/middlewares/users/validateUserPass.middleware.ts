import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces';

export default function validateUserPass(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body as IUser;

  if (!username) {
    const message = '"username" is required';
    return res.status(400).json({ message });
  }
  if (!password) {
    const message = '"password" is required';
    return res.status(400).json({ message });
  }

  next();
}