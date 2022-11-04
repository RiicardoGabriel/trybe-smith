import { Router } from 'express';

import productController from '../controllers/productController';
import validateProducts from '../middlewares/products/validateProducts.middleware';
import validateProductsType from '../middlewares/products/validateProductsType.middleware';
import validateProductsLength from '../middlewares/products/validateProductsLength.middleware';

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