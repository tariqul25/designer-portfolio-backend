import { Request, Response } from "express";
import * as pricingService from "./pricing.service.js";

export const createPricingPlanController = async (req: Request, res: Response) => {
  try {
    const plan = await pricingService.createPricingPlan(req.body);
    res.status(201).json(plan);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPricingPlansController = async (req: Request, res: Response) => {
  try {
    const plans = await pricingService.getPricingPlans();
    res.json(plans);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPricingPlanByIdController = async (req: Request, res: Response) => {
  try {
    const plan = await pricingService.getPricingPlanById(req.params.id);
    if (!plan) return res.status(404).json({ message: "Pricing Plan not found" });
    res.json(plan);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePricingPlanController = async (req: Request, res: Response) => {
  try {
    const updatedPlan = await pricingService.updatePricingPlan(req.params.id, req.body);
    if (!updatedPlan) return res.status(404).json({ message: "Pricing Plan not found" });
    res.json(updatedPlan);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePricingPlanController = async (req: Request, res: Response) => {
  try {
    const deleted = await pricingService.deletePricingPlan(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Pricing Plan not found" });
    res.json({ message: "Pricing Plan deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
