import { Schema, model, Types } from "mongoose";
import { IReview } from "./review.interface.js";

const reviewSchema = new Schema<IReview>({
  reviewer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  design: { type: Schema.Types.ObjectId, ref: "Design", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Review = model<IReview>("Review", reviewSchema);
