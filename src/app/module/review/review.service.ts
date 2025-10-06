import { Review } from "./review.model.js";
import { IReview } from "./review.interface.js";

export const createReview = async (data: IReview) => {
  const review = new Review(data);
  return await review.save();
};

export const getReviews = async () => {
  return await Review.find().populate("reviewer").populate("design");
};

export const getReviewById = async (id: string) => {
  return await Review.findById(id).populate("reviewer").populate("design");
};

export const updateReview = async (id: string, data: Partial<IReview>) => {
  return await Review.findByIdAndUpdate(id, data, { new: true });
};

export const deleteReview = async (id: string) => {
  return await Review.findByIdAndDelete(id);
};
