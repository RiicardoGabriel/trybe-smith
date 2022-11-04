import { Router } from 'express';

import productController from '../controllers/productController';
import validateProducts from '../middlewares/validateProducts';
import validateProductsType from '../middlewares/validateProductsType';
import validateProductsLength from '../middlewares/validateProductsLength';

const router = Router();

router.post(
  '/',
  validateProducts,
  validateProductsType,
  validateProductsLength,
  productController.create,
);
router.get('/', productController.listProducts);

export default router;