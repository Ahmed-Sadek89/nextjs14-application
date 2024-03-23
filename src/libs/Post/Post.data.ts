import { unstable_noStore as noStore } from "next/cache";
import { connectToDb } from "../database";
import { Post } from "./Post.models"
import { post } from "@/types/posts.types";

export const getPosts = async (): Promise<post[]> => {
    try {
        connectToDb()
        const posts = await Post.find();
        return posts
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export const insertPost = async () => {
    try {
        const post = new Post({
            title: 'qui est esse',
            desc: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
            userId: '65fe3e11fff2974e2769a461',
            slug: 'second-post',
        })
        await post.save()
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export const getPostBySlug = async (slug: string) => {
    noStore()
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}