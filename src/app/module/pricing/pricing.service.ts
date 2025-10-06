import { PricingPlan } from "./pricing.model.js";
import { IPricingPlan } from "./pricing.interface.js";

export const createPricingPlan = async (data: IPricingPlan) => {
  const plan = new PricingPlan(data);
  return await plan.save();
};

export const getPricingPlans = async () => {
  return await PricingPlan.find().populate("design");
};

export const getPricingPlanById = async (id: string) => {
  return await PricingPlan.findById(id).populate("design");
};

export const updatePricingPlan = async (id: string, data: Partial<IPricingPlan>) => {
  return await PricingPlan.findByIdAndUpdate(id, data, { new: true });
};

export const deletePricingPlan = async (id: string) => {
  return await PricingPlan.findByIdAndDelete(id);
};
