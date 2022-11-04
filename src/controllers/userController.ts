import { Request, Response } from 'express';
import userService from '../services/userService';
import { IUser } from '../interfaces';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;

  const { status, token } = await userService.create(user);
  res.status(status).json({ token });
}

export default { create };