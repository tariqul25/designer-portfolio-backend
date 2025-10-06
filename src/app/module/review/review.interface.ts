import { Types } from "mongoose";

export interface IReview {
  reviewer: Types.ObjectId; 
  design: Types.ObjectId;   
  rating: number;           
  comment: string;
  createdAt?: Date;
}
