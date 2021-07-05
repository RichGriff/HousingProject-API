import express from "express";
import { createTenant, getTenant, getTenants } from "../controllers/tenantController.js";
const router = express.Router();

router.route("/").get(getTenants).post(createTenant);
router.route("/:id").get(getTenant);

export default router;
