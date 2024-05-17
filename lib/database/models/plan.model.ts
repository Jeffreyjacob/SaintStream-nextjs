import { Schema, model, models } from "mongoose";

const PlanSchema = new Schema({
    plantype:{type:String,required:true},
    Planprice:{type:String,required:true},
})

const Plan = models.Plan || model("Plan",PlanSchema)

export default Plan