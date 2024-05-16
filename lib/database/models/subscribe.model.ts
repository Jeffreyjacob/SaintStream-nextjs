import { Schema } from "mongoose";

const SubscribeSchema = new Schema({
    createAt:{type:Date,default:Date.now},
    stripeId:{type:String,required:true,unique:true},
    totalAmount:{type:String},
    UserSubscribing:{type: Schema.Types.ObjectId, ref:"User"}
})