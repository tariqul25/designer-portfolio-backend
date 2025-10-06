import { Request, Response } from "express";
import * as reviewService from "./review.service.js";

export const createReviewController = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getReviewsController = async (req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getReviews();
    res.json(reviews);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getReviewByIdController = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReviewController = async (req: Request, res: Response) => {
  try {
    const updatedReview = await reviewService.updateReview(req.params.id, req.body);
    if (!updatedReview) return res.status(404).json({ message: "Review not found" });
    res.json(updatedReview);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReviewController = async (req: Request, res: Response) => {
  try {
    const deleted = await reviewService.deleteReview(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
