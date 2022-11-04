import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces';

export default function validateUsersLength(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body as IUser;

  if (username.length < 3) {
    const message = '"username" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }
  if (String(classe).length < 3) {
    const message = '"classe" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }
  if (Number(level) === 0) {
    const message = '"level" must be greater than or equal to 1';
    return res.status(422).json({ message });
  }
  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return res.status(422).json({ message });
  }

  next();
}