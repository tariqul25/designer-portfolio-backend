import { Schema, model, Types } from "mongoose";
import { IPricingPlan } from "./pricing.interface.js";

const pricingPlanSchema = new Schema<IPricingPlan>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], default: [] },
  duration: { type: String, required: true },
  design: { type: Schema.Types.ObjectId, ref: "Design", required: true },
}, { timestamps: true });

export const PricingPlan = model<IPricingPlan>("PricingPlan", pricingPlanSchema);
