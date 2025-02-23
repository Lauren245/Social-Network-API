import { Schema, Types, model, type Document } from "mongoose";

interface IUser extends Document {
    username: string, /*username will have the unique constraint, so it could technically be an ID, but it is of type string, so I don't think the username will be enough */
    email: string,
    thoughts: Types.ObjectId[], 
    friends: Types.ObjectId[],
    friendCount?: number //for virtual
}

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String, 
            unique: [true, "username must be unique"], 
            required: [true, "username is required"], 
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            validate: {
                validator: function (value: string) {
                    return emailRegex.test(value);
                },
                message: (props) =>  `${props.value} is not a valid email address.`
            }
        },
        thoughts: [{
            type: Schema.Types.ObjectId, ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId, ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        }
    }
);

userSchema.virtual("friendCount")
.get(function(this: IUser) {
    return this.friends.length;
});

const User = model("User", userSchema);

export default User;