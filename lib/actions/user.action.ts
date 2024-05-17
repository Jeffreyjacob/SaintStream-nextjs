"use server"

import { CreatePlanParam, CreateUserParam } from "@/constants/type"
import User from "../database/models/user.model";
import { connectToDatabase } from "../database";
import Plan from "../database/models/plan.model";

export const CreateUser = async (user:CreateUserParam)=>{
    try{
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    }catch(error){
        console.log(error)
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}

export const CreatePlan = async (plan:CreatePlanParam)=>{
   try{
    await connectToDatabase();
    const createPlan = await Plan.create(plan)
    return JSON.parse(JSON.stringify(createPlan));
   }catch(error){
    console.log(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
   }
}