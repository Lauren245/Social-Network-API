import { Request, Response } from 'express';
import { User } from '../models/index.js';

//GET

export const getAllUsers = async(_req: Request, res: Response) => {
    try{
        const users = await User.find().populate('friends').populate('thoughts');
        res.json(users);
    }catch(error: any){
        console.error('Attempt to get all users encountered error: ', error.message);
        res.status(500).json({ message: error.message});
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try{
        const user = await User.findById(userId).populate('friends').populate('thoughts');
        if(user) {
            res.json(user)
        }
        else{
            res.status(404).json({
                message: 'User not found'
            });
        }
    }catch(error: any){
        res.status(500).json({
            message: error.message
        });
    }
}

//POST
export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await User.create(req.body);
        res.json(user);
    }catch(error: any){
        console.error('Attempt to create a user encoutered error: ', error.message);
        res.status(500).json({ message: error.message });
    }
}

//PUT
export const updateUser = async (req: Request, res: Response) => {
    try{
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if(!user){
            res.status(404).json({ message: 'Unable to find a user with the specified ID.'})
        }

        res.json(user);

    }catch(error: any){
        console.error('Attempt to update user encountered error: ', error.message);
        res.status(500).json({ message: error.message });
    }
}
