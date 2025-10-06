import { Request, Response } from "express";
import * as designService from "./design.service.js";

export const createDesignController = async (req: Request, res: Response) => {
  try {
    const design = await designService.createDesign(req.body);
    res.status(201).json(design);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getDesignsController = async (req: Request, res: Response) => {
  try {
    const designs = await designService.getDesigns();
    res.json(designs);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getDesignByIdController = async (req: Request, res: Response) => {
  try {
    const design = await designService.getDesignById(req.params.id);
    if (!design) return res.status(404).json({ message: "Design not found" });
    res.json(design);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateDesignController = async (req: Request, res: Response) => {
  try {
    const updatedDesign = await designService.updateDesign(req.params.id, req.body);
    if (!updatedDesign) return res.status(404).json({ message: "Design not found" });
    res.json(updatedDesign);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteDesignController = async (req: Request, res: Response) => {
  try {
    const deleted = await designService.deleteDesign(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Design not found" });
    res.json({ message: "Design deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const likeDesignController = async (req: Request, res: Response) => {
  try {
    const updatedDesign = await designService.incrementLikes(req.params.id);
    res.json(updatedDesign);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const downloadDesignController = async (req: Request, res: Response) => {
  try {
    const updatedDesign = await designService.incrementDownloads(req.params.id);
    res.json(updatedDesign);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
