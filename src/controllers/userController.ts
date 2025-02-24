import { Request, Response } from 'express';
import { User } from '../models/index.js';

//#region GETTERS

//GET all users
export const getAllUsers = async(_req: Request, res: Response) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(error: any){
        console.error(`Attempt to get all users encountered error ${error.message}`);
        res.status(500).json({ message: error.message});
    }
}
//#endregion