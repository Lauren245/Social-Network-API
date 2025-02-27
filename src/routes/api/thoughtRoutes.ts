import { Router } from 'express';
const router = Router();

import{
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    /*deleteThought,*/
    createReaction
} from '../../controllers/thoughtController.js'

// /api/thoughts 
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(createReaction);

export { router as thoughtRouter };