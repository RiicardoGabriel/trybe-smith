import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import { IUser } from '../interfaces';
import userModel from '../models/userModel';

async function create(user: IUser) {
  const data = await userModel.create(user);
  const token = jwt.sign({ data }, secret, config);
  
  return { status: 201, token };
}

async function login(user: IUser) {
  const data = await userModel.login(user.username);

  if (data === null || data.password !== user.password) {
    return { status: 401, message: 'Username or password invalid' }; 
  }

  const token = jwt.sign({ data }, secret, config);
  return { status: 200, token };
}

export default { create, login };