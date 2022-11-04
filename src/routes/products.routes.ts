import { Router } from 'express';

import productController from '../controllers/productController';

const router = Router();

router.post('/', productController.create);

export default router;