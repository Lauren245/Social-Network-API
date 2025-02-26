import { Router } from 'express';
const router = Router();

import{
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend
} from '../../controllers/userController.js'

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:userId
router.route('/:userId/friends/:userId').put(addFriend);


export { router as userRouter };