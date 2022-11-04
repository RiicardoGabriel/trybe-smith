import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../../interfaces';

export default function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as IProduct;

  if (!name) {
    const message = '"name" is required';
    return res.status(400).json({ message });
  }
  if (!amount) {
    const message = '"amount" is required';
    return res.status(400).json({ message });
  }

  next();
}