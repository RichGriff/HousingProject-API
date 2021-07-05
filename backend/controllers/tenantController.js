import asyncHandler from "express-async-handler";
import Tenant from "../models/tenantModel.js";

// @desc    Fetch all tenants
// @route   GET /api/tenants
// @access  Public
const getTenants = asyncHandler(async (req, res) => {
  const tenants = await Tenant.find({});
  res.json(tenants);
});

// @desc    Get single tenant
// @route   GET /api/tenants/:id
// @access  Private
const getTenant = asyncHandler(async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id);

    if (tenant) {
      res.json(tenant);
    } else {
      res.status(404);
      throw new Error("Tenant not found");
    }
  } catch (error) {
    console.log(error);
  }
});

// @desc    Create a tenant
// @route   POST /api/tenants
// @access  Private
const createTenant = asyncHandler(async (req, res) => {
  try {
    const tenant = new Tenant({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      contactNumber: req.body.contactNumber,
      DOB: req.body.dateOfBirth,
      emailAddress: req.body.emailAddress
    });

    const createdTenant = await tenant.save();

    res.status(201).json(createdTenant);
  } catch (error) {
    console.log(error);
  }
});

export { getTenants, getTenant, createTenant };
