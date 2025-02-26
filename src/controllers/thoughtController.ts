import { Request, Response } from 'express';
import { Thought, User } from '../models/index.js';

//GET
export const getAllThoughts = async(_req: Request, res: Response) => {
    try{
        const thoughts = await Thought.find().populate('reactions');
        res.json(thoughts);
    }catch(error: any){
        console.error('Attempt to get all thoughts encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}

export const getThoughtById = async(req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try{
        const thought = await Thought.findById(thoughtId);
        if(thought){
            res.json(thought);
        }else{
            res.status(404).json({ message: 'Thought not found.'});
        }

    }catch(error: any){
        console.error('Attempt to find thought by id encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}

//POST
export const createThought = async(req: Request, res: Response) => {
    try{
        const thought = await Thought.create(req.body);
        const { username } = thought;
        //find the user based on their username, and add the thought to their thoughts array
        const user = await User.findOneAndUpdate(
            {username: username},
            {$addToSet: {thoughts: thought._id}},
            {new: true}
        );

        if(!user){
            res.status(404).json({ message: 'Unable to find a user with that username.'});
        }

        res.json(thought);

    }catch(error: any){
        console.error('Attempt to get add thought encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}


//PUT
export const updateThoughtById = async(req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try{
        const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            {$set: req.body},
            {runValidators: true, new: true}
        );

        if(!thought){
            res.status(404).json({ message: 'Unable to find a thought with the specified ID.'});
        }

        res.json(thought);
        
    }catch(error: any){
        console.error('Attempt to get update thought encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}