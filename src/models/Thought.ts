import { Schema, Types, model, type Document } from "mongoose";
import dayjs from "dayjs";

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId
}

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: string, /*??? Is this not connected to the username property of a User?*/

}