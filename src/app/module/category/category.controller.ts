import { Request, Response } from "express";
import { categoryService } from "./category.services.js";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.json(updatedCategory);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const deleted = await categoryService.deleteCategory(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
