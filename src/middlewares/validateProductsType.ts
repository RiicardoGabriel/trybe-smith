import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces';

export default function validateProductsType(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as IProduct;

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return res.status(422).json({ message });
  }
  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return res.status(422).json({ message });
  }

  next();
}