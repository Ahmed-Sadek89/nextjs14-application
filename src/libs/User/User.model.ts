import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    image?: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 25
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 100
    },
    image: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema)