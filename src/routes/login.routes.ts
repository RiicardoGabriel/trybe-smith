import { Router } from 'express';

import userController from '../controllers/userController';
import validateUserPassMiddleware from '../middlewares/users/validateUserPass.middleware';

const router = Router();

router.post('/', validateUserPassMiddleware, userController.login);

export default router;