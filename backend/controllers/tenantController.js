import asyncHandler from "express-async-handler";
import Tenant from "../models/tenantModel.js";

// @desc    Fetch all tenants
// @route   GET /api/tenants
// @access  Private Admin
const getTenants = asyncHandler(async (req, res) => {
  const tenants = await Tenant.find({});
  res.json(tenants);
});

// @desc    Get single tenant
// @route   GET /api/tenants/:id
// @access  Public - Only thier tenant details
const getTenantById = asyncHandler(async (req, res) => {
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
// @access  Private Admin
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

// @desc    Update Tenant
// @route   PUT /api/tenants
// @access  Public
const updateTenant = asyncHandler(async (req, res) => {
  const { firstname, lastname, contactNumber, dateOfBirth } = req.body;

  const tenant = await Tenant.findById(req.params.id);

  if (tenant) {
    tenant.firstname = firstname;
    tenant.lastname = lastname;
    tenant.contactNumber = contactNumber;
    tenant.DOB = dateOfBirth;

    const updatedTenant = await tenant.save();

    res.json(updatedTenant);
  } else {
    res.status(404);
    throw new Error("Tenant not found");
  }
});

export { getTenants, getTenantById, createTenant, updateTenant };
