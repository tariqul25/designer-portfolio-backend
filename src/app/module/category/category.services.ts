import { Category } from "./category.model.js";
import { ICategory } from "./category.interface.js";

const createCategory = async (data: ICategory) => {
  const category = new Category(data);
  return await category.save();
};

const getCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

const updateCategory = async (id: string, data: Partial<ICategory>) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

export const categoryService = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
