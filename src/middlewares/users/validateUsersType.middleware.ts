import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces';

export default function validateUsersType(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body as IUser;

  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return res.status(422).json({ message });
  }
  if (typeof classe !== 'string') {
    const message = '"classe" must be a string';
    return res.status(422).json({ message });
  }
  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return res.status(422).json({ message });
  }
  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return res.status(422).json({ message });
  }

  next();
}