import { Request, Response } from "express";
import * as PurchaseService from "./purchase.service.js";

export const createPurchaseController = async (req: Request, res: Response) => {
    try {
        const purchase = await PurchaseService.createPurchase(req.body);
        res.status(201).json(purchase);
    } catch (error) {
        res.status(500).json({ message: "Purchase creation failed", error });
    }
};

export const getPurchasesController = async (req: Request, res: Response) => {
    try {
        const purchases = await PurchaseService.getPurchases();
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch purchases", error });
    }
};

export const getPurchaseByIdController = async (req: Request, res: Response) => {
    try {
        const purchase = await PurchaseService.getPurchaseById(req.params.id);
        if (!purchase) return res.status(404).json({ message: "Purchase not found" });
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch purchase", error });
    }
};

export const updatePurchaseStatusController = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;
        const updatedPurchase = await PurchaseService.updatePurchaseStatus(req.params.id, status);
        if (!updatedPurchase) return res.status(404).json({ message: "Purchase not found" });
        res.status(200).json(updatedPurchase);
    } catch (error) {
        res.status(500).json({ message: "Failed to update purchase status", error });
    }
};
