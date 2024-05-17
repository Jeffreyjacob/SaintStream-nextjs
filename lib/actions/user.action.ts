"use server"

import { CreateUserParam } from "@/constants/type"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model";

export const CreateUser = async (user:CreateUserParam)=>{
    try{
        await connectToDatabase()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    }catch(error){
        console.log(error)
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}