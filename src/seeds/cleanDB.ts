import { Thought, User } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
    try {
        await Thought.deleteMany({});
        console.log('Thought collection cleaned!');

        await User.deleteMany({});
        console.log('User collection cleaned!');
    }catch(error){
        console.error('An error was encountered while attempting to clean the collections', error);
        process.exit(1);
    }
};

export default cleanDB;