import { Router } from 'express';
const router = Router();

import{
    getAllUsers,
    getUserById,
    createUser
} from '../../controllers/userController.js'

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById);


export { router as userRouter };