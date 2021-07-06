import express from "express";
const router = express.Router();
import { createAccount, getAccountById, getAccounts, updateAccount } from "../controllers/accountController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getAccounts).post(protect, admin, createAccount);
router.route("/:id").get(getAccountById).put(protect, admin, updateAccount);

export default router;
