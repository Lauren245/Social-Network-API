import { Request, Response } from 'express';
import { Thought, /*User*/ } from '../models/index.js';

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
        /* !!! may want to consider adding something to check if a user with the specified
        username exists since thoughts are supposed to be deleted if a user gets deleted*/
        res.json(thought);
    }catch(error: any){
        console.error('Attempt to get add thought encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}