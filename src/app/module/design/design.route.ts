import { Router } from "express";
import {
  createDesignController,
  getDesignsController,
  getDesignByIdController,
  updateDesignController,
  deleteDesignController,
  likeDesignController,
  downloadDesignController
} from "./design.controller.js";

const router = Router();

router.post("/", createDesignController);
router.get("/", getDesignsController);
router.get("/:id", getDesignByIdController);
router.put("/:id", updateDesignController);
router.delete("/:id", deleteDesignController);

// Extra endpoints
router.post("/:id/like", likeDesignController);
router.post("/:id/download", downloadDesignController);

export const designRoutes = router;