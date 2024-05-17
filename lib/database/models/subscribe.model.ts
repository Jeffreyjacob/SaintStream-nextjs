import {  Schema, model, models } from "mongoose";

const SubscribeSchema = new Schema({
    createAt:{type:Date,default:Date.now},
    stripeId:{type:String,required:true,unique:true},
    totalAmount:{type:String},
    user:{type: Schema.Types.ObjectId, ref:"User"},
    plan:{tyep:Schema.Types.ObjectId,ref:"Plan"}
})

const Subscribe = models.Subscribe || model("Subscribe",SubscribeSchema)

export default Subscribe