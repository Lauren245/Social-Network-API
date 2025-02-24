import { Router } from 'express';
const router = Router();

import{
    getAllUsers,
    createUser
} from '../../controllers/userController.js'

// route: /api/users
router.route('/').get(getAllUsers).post(createUser);

export { router as userRouter };