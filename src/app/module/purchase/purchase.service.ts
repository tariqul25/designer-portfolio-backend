import { Purchase } from "./purchase.model.js";
import { IPurchase } from "./purchase.interface.js";

export const createPurchase = async (data: IPurchase) => {
    const purchase = new Purchase(data);
    return await purchase.save();
};

export const getPurchases = async () => {
    return await Purchase.find()
        .populate("customer", "name email")
        .populate("design", "title price");
};

export const getPurchaseById = async (id: string) => {
    return await Purchase.findById(id)
        .populate("customer", "name email")
        .populate("design", "title price");
};

export const updatePurchaseStatus = async (id: string, status: "Pending" | "Paid" | "Cancelled") => {
    return await Purchase.findByIdAndUpdate(id, { paymentStatus: status }, { new: true });
};
