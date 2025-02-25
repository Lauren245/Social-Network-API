import { Router } from 'express';
const router = Router();

import{
    getAllUsers,
    getUserById,
    createUser,
    updateUser
} from '../../controllers/userController.js'

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser);


export { router as userRouter };