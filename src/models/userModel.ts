import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUser } from '../interfaces';

async function create(user: IUser): Promise<IUser> {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  console.log(result);
  const newProduct: IUser = { username, classe, level, password };
  return newProduct;
}

export default { create };