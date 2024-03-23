import { user } from "@/types/user.types";
import { connectToDb } from "../database";
import { User } from "./User.model"

export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find();
        return users
    } catch (error: any) {
        throw new Error(error.message)
    } 
}

export const getUserById = async (id: string) => {
    try {
        const user = await User.findById(id);
        return user
    } catch (error: any) {
        console.log(error.message)
    }
}

export const insertUser = async () => {
    try {
        connectToDb()
        const user = new User({
            username: "amr sadek",
            email: "amr.sadek@yahoo.com",
            password: "12345",
            image: "sadek.jpg",
            isAdmin: false
        });
        await user.save()
    } catch (error) {
        console.log(error)
    }
}