import { Document, Types } from "mongoose";

export interface IPurchase extends Document {
    customer: Types.ObjectId; 
    design: Types.ObjectId;  
    pricingPlan: string;      
    paymentStatus: "Pending" | "Paid" | "Cancelled";
    purchaseDate: Date;
}
