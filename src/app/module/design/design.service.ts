import { Design } from "./design.model.js";
import { IDesign } from "./design.interface.js";

export const createDesign = async (data: IDesign) => {
  const design = new Design(data);
  return await design.save();
};

export const getDesigns = async () => {
  return await Design.find().populate("category");
};

export const getDesignById = async (id: string) => {
  return await Design.findById(id).populate("category");
};

export const updateDesign = async (id: string, data: Partial<IDesign>) => {
  return await Design.findByIdAndUpdate(id, data, { new: true });
};

export const deleteDesign = async (id: string) => {
  return await Design.findByIdAndDelete(id);
};

export const incrementLikes = async (id: string) => {
  return await Design.findByIdAndUpdate(id, { $inc: { likesCount: 1 } }, { new: true });
};

export const incrementDownloads = async (id: string) => {
  return await Design.findByIdAndUpdate(id, { $inc: { downloadsCount: 1 } }, { new: true });
};
