import asyncHandler from "express-async-handler";
import Account from "../models/accountModel.js";

// @desc    Fetch all accounts
// @route   GET /api/accounts
// @access  Private Admin
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({});
  res.json(accounts);
});

// @desc    Get single account
// @route   GET /api/accounts/:id
// @access  Public
const getAccountById = asyncHandler(async (req, res) => {
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
// @access  Private Admin
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

// @desc    Update Account
// @route   PUT /api/accounts
// @access  Private Admin
const updateAccount = asyncHandler(async (req, res) => {
  const { accountType, startDate, endDate, currentStatus, currentBalance, nextBillingDate, lastBillingDate } = req.body;

  const account = await Account.findById(req.params.id);

  if (account) {
    account.accountType = accountType;
    account.startDate = startDate;
    account.endDate = endDate;
    account.currentStatus = currentStatus;
    account.currentBalance = currentBalance;
    account.nextBillingDate = nextBillingDate;
    account.lastBillingDate = lastBillingDate;

    const updatedAccount = await account.save();

    res.json(updatedAccount);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

export { getAccounts, getAccountById, createAccount, updateAccount };
