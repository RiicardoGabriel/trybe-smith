import { Request, Response } from 'express';
import productService from '../services/productService';
import { IProduct } from '../interfaces';

async function create(req: Request, res: Response) {
  const productBody = req.body as IProduct;

  const { status, data } = await productService.create(productBody);
  res.status(status).json(data);
}

export default { create };