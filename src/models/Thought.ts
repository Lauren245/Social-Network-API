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
    reactions: IReaction[],
    reactionCount?: number //for virtual
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
            immutable: true, //prevents modification after creation

            //had to add any type to bypass strict type checking because dayjs formatting is a string, not a Date.
            get: (value: Date): any => dayjs(value).format("MMMM D, YYYY h:mm A") 
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true //this is technically not needed because we want to include the getters and toJSON does this by default.
        },
        id: false,
        _id: false
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
            immutable: true, //prevents modification after creation

            //had to add any type to bypass strict type checking because dayjs formatting is a string, not a Date.
            get: (value: Date): any => dayjs(value).format("MMMM D, YYYY h:mm A") 
        },
        username: {
            type: String,
            required: [true, "A username is required."]
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true //this is technically not needed because we want to include the getters and toJSON does this by default.
        },
        id: false
    }
);

thoughtSchema.virtual("reactionCount")
.get(function (this: IThought){
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

export default Thought;