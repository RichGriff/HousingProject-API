import asyncHandler from "express-async-handler";
import Account from "../models/accountModel.js";

// @desc    Fetch all accounts
// @route   GET /api/accounts
// @access  Public
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({});
  res.json(accounts);
});

// @desc    Get single account
// @route   GET /api/accounts/:id
// @access  Public
const getAccount = asyncHandler(async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account) {
      res.json(account);
    } else {
      res.status(404);
      throw new Error("Account not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc    Create an account
// @route   POST /api/accounts
// @access  Private
const createAccount = asyncHandler(async (req, res) => {
  try {
    const account = new Account({
      accountType: req.body.accountType,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      currentStatus: req.body.currentStatus,
      currentBalance: req.body.currentBalance,
      nextBillingDate: req.body.nextBillingDate,
      lastBillingDate: req.body.lastBillingDate
    });

    const createdAccount = await account.save();

    res.status(201).json(createdAccount);
  } catch (error) {
    console.log(error);
  }
});

export { getAccounts, getAccount, createAccount };
