import { Router } from "express";
import {
  createReviewController,
  getReviewsController,
  getReviewByIdController,
  updateReviewController,
  deleteReviewController
} from "./review.controller.js";

const router = Router();

router.post("/", createReviewController);
router.get("/", getReviewsController);
router.get("/:id", getReviewByIdController);
router.put("/:id", updateReviewController);
router.delete("/:id", deleteReviewController);


export const reviewRoutes = router;