import { Types } from "mongoose";

export interface IPricingPlan {
  name: string;            
  price: number;
  features: string[];
  duration: string;         
  design: Types.ObjectId;  
  createdAt?: Date;
  updatedAt?: Date;
}
