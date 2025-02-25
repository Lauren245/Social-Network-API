import { Schema, Types, model, type Document } from "mongoose";

interface IUser extends Document {
    username: string, 
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
            unique: true, 
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
            //I'm sure I'm not doing this right. I need to have a userID for searching for a specific user, but I don't want to show the friends list.
            type: Schema.Types.ObjectId, ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false

    }
);

userSchema.virtual("friendCount")
.get(function(this: IUser) {
    return this.friends.length;
});

const User = model("User", userSchema);

export default User;