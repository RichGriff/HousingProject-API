import express from "express";
import { createTenant, getTenantById, getTenants, updateTenant } from "../controllers/tenantController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, admin, getTenants).post(protect, admin, createTenant);
router.route("/:id").get(protect, getTenantById).put(protect, updateTenant);

export default router;
