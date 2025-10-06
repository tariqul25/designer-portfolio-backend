import { Schema, model, Types } from "mongoose";
import { IDesign } from "./design.interface.js";

const designSchema = new Schema<IDesign>({
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  description: { type: String, required: true },
  previewImageUrl: { type: String, required: true },
  designerName: { type: String, required: true },
  tools: { type: [String], default: [] },
  effects: { type: [String], default: [] },
  price: { type: Number, required: true },
  process: { type: String },
  complexity: { type: String, enum: ["Basic", "Intermediate", "Advanced"], required: true },
  tags: { type: [String], default: [] },
  status: { type: String, enum: ["Active", "Draft", "Archived"], default: "Draft" },
  likesCount: { type: Number, default: 0 },
  downloadsCount: { type: Number, default: 0 },
}, { timestamps: true });

export const Design = model<IDesign>("Design", designSchema);
