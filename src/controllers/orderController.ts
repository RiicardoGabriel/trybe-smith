import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function getOrders(_req: Request, res: Response) {
  const { status, data } = await orderService.getOrders();

  res.status(status).json(data);
}

export default { getOrders };