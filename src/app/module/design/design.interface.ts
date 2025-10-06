import { Types } from "mongoose";

export type ComplexityLevel = "Basic" | "Intermediate" | "Advanced";
export type StatusType = "Active" | "Draft" | "Archived";

export interface IDesign {
  title: string;
  category: Types.ObjectId;         
  description: string;
  previewImageUrl: string;
  designerName: string;
  tools: string[];                
  effects: string[];                
  price: number;
  process: string;
  complexity: ComplexityLevel;
  tags: string[];               
  status: StatusType;
  likesCount?: number;               
  downloadsCount?: number;          
  createdAt?: Date;
  updatedAt?: Date;
}
