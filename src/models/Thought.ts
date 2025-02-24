import { Schema, Types, model, type Document } from "mongoose";
import dayjs from "dayjs";

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    createdAt: Date,
    username: string
};

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: string, 
    reactions: Schema.Types.ObjectId[]
};

const reactionSchema = new Schema<IReaction>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, "No reaction body provided"],
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: () => dayjs().toDate(),
            immutable: true //prevents modification after creation
        }
    }
);

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: [true, "Thought text is required."],
            validate: {
                validator: function (value: string) {
                    return value.length >= 1 && value.length <= 280;
                },
                message: "Thought text must be between 1 and 280 characters."
            }
        },
        createdAt: {
            type: Date,
            default: () => dayjs().toDate(),
            immutable: true //prevents modification after creation
        },
        username: {
            type: String,
            required: [true, "A username is required."]
        },
        reactions: [reactionSchema]
    }
);