"use server"

import { CheckoutSubscribeParams, CreateSubscriberParams, GetSubscribedUserParams } from "@/constants/type";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { connectToDatabase } from "../database";
import Subscribe from "../database/models/subscribe.model";
import Plan from "../database/models/plan.model";
import User from "../database/models/user.model";


export const CreateCheckoutOrder = async(subscribe:CheckoutSubscribeParams)=>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const price = Number(subscribe.price) * 100;
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: [
              {
               price_data:{
                 currency:'usd',
                 unit_amount:price,
                 product_data:{
                    name:subscribe.planType
                 }
               },
               quantity:1
              },
            ],
            metadata:{
                planId:subscribe.planId,
                buyerId:subscribe.buyerId
            },
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/verifySubscription`,
          });
          redirect(session.url!)
    }catch(error){
        throw error;
    }
}

export const CreateSubscriber = async(subscribe:CreateSubscriberParams)=>{
    try{
      await connectToDatabase()
      const newSubscriber = await Subscribe.create({
        ...subscribe,
         plan:subscribe.planId,
         user:subscribe.buyerId
      })
      return JSON.parse(JSON.stringify(newSubscriber))
    }catch(error){
        console.log(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}

export const GetSubscribedUser = async(userId:string)=>{
    try{
      await connectToDatabase()
      const newSubscriber = await Subscribe.find({user:userId});
      if (newSubscriber.length > 0) {
        return {
          message: 'User is already subscribed',
          data: JSON.parse(JSON.stringify(newSubscriber))
        };
      } else {
        return {
          message: 'User is not subscribed',
          data: []
        };
      }

    }catch(error){
        console.log(error)
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}