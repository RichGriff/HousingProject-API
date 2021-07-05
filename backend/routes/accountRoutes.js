import express from "express";
const router = express.Router();
import { createAccount, getAccount, getAccounts } from "../controllers/accountController.js";

router.route("/").get(getAccounts).post(createAccount);
router.route("/:id").get(getAccount);

export default router;
