import connection from './connection';
import { IOrder } from '../interfaces';

async function getOrders(): Promise<IOrder[]> {
  const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prd.id) AS productsIds
  FROM Trybesmith.Orders AS ord
  INNER JOIN Trybesmith.Products AS prd
  ON ord.id = prd.orderId
  GROUP BY ord.id`;

  const [orders] = await connection.execute(query);
  
  return orders as IOrder[];
}

export default { getOrders };