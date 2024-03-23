import mongoose, { Document, Schema } from "mongoose"

interface IPost extends Document {
    title: string,
    desc: string,
    img?: string,
    userId: string,
    slug: string,
    createdAt: string,
    updatedAt: string
}

const postSchema: Schema<IPost> = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true})

export const Post = mongoose.models?.Post || mongoose.model<IPost>('Post', postSchema)