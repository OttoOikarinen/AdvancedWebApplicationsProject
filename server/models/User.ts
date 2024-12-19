// Sources: lecture materials and mongoose documantation.

import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    hashed_password: string;
    date_joined: Date;
    last_login: Date;
    profilephoto_path: string;
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true},
    hashed_password: { type: String, required: true, unique: true},
    date_joined: { type: Date, required: true, default: Date.now},
    last_login: {type: Date, required: true, default: Date.now},
    profilephoto_path: {type: String, required: false, unique: true}

});

const UserModel = mongoose.model<IUser>("User", UserSchema);
export default UserModel;