import { Request, Response } from 'express';
import userService from '../services/userService';
import { IUser } from '../interfaces';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;

  const { status, token } = await userService.create(user);
  res.status(status).json({ token });
}

async function login(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, token, message } = await userService.login(user);

  if (status === 401) {
    return res.status(status).json({ message }); 
  }

  res.status(status).json({ token });
}

export default { create, login };