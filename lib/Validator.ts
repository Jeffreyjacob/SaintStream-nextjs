import { z } from "zod";


export const SignInFormSchema = z.object({
    email:z.string().email("Please enter a valid email address"),
    password:z.string().min(7,"Your password must be at least 7 characters")
})

export const SignUpFormSchema = z.object({
    email:z.string().email("Please enter a valid email address"),
    password:z.string().min(7,"Your password must be at least 7 characters"),
    confirmPassword:z.string()
}).refine(data => data.password === data.confirmPassword,{
    message:"Password must match",
    path:["confirmPassword"]
})