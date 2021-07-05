import express from "express";
import { createProperty, getProperties, getProperty } from "../controllers/propertyController.js";
const router = express.Router();

router.route("/").get(getProperties).post(createProperty);
router.route("/:id").get(getProperty);

export default router;
