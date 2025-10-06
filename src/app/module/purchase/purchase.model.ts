import { Schema, model } from "mongoose";
import { IPurchase } from "./purchase.interface.js";

const purchaseSchema = new Schema<IPurchase>({
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    design: { type: Schema.Types.ObjectId, ref: "Design", required: true },
    pricingPlan: { type: String, required: true },
    paymentStatus: { 
        type: String, 
        enum: ["Pending", "Paid", "Cancelled"], 
        default: "Pending" 
    },
    purchaseDate: { type: Date, default: Date.now },
}, {
    timestamps: true
});

export const Purchase = model<IPurchase>("Purchase", purchaseSchema);
