import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Get all Users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Get single User
// @route   GET /api/users/:id
// @access  Public
const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

// @desc    Create a user
// @route   POST /api/users
// @access  Private
const createUser = asyncHandler(async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      tenantId: req.body.tenantId,
      isAdmin: req.body.isAdmin
    });

    const createdUser = await user.save();

    res.json(createdUser);
  } catch (error) {
    console.log(error);
  }
});

export { getUsers, getUser, createUser };
