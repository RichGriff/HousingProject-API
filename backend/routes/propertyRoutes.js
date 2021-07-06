import express from "express";
import { createProperty, getProperties, getPropertyById, updateProperty } from "../controllers/propertyController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, admin, getProperties).post(protect, admin, createProperty);
router.route("/:id").get(getPropertyById).put(protect, admin, updateProperty);

export default router;
