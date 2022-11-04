import { Router } from 'express';

import userController from '../controllers/userController';
import validateUsers from '../middlewares/users/validateUsers.middleware';
import validateUsersType from '../middlewares/users/validateUsersType.middleware';
import validateUsersLength from '../middlewares/users/validateUsersLength.middleware';

const router = Router();

router.post('/', validateUsers, validateUsersType, validateUsersLength, userController.create);

export default router;