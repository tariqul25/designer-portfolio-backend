import { Router } from "express";
import * as PurchaseController from "./purchase.controller.js";

const router = Router();

router.post("/", PurchaseController.createPurchaseController);
router.get("/", PurchaseController.getPurchasesController);
router.get("/:id", PurchaseController.getPurchaseByIdController);
router.patch("/:id/status", PurchaseController.updatePurchaseStatusController);

export const purchaseRoutes = router;
