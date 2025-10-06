import { Router } from "express";
import {
  createPricingPlanController,
  getPricingPlansController,
  getPricingPlanByIdController,
  updatePricingPlanController,
  deletePricingPlanController
} from "./pricing.controller.js";

const router = Router();

router.post("/", createPricingPlanController);
router.get("/", getPricingPlansController);
router.get("/:id", getPricingPlanByIdController);
router.put("/:id", updatePricingPlanController);
router.delete("/:id", deletePricingPlanController);

export const pricingRoutes = router;