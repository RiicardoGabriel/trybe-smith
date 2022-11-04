import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../../interfaces';

export default function validateProductsLength(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as IProduct;

  if (name.length < 3) {
    const message = '"name" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }
  if (amount.length < 3) {
    const message = '"amount" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }

  next();
}