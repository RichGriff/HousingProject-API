import asyncHandler from "express-async-handler";
import Property from "../models/propertyModel.js";

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  Public
const getProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
});

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
const getProperty = asyncHandler(async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404);
      throw new Error("Property Not Found");
    }
  } catch (error) {
    res.json(error.message);
  }
});

// @desc    Create Property
// @route   POST /api/property
// @access  Private Admin
const createProperty = asyncHandler(async (req, res) => {
  try {
    const property = new Property({
      address: req.body.address,
      city: req.body.city,
      postCode: req.body.postCode,
      propertyType: req.body.propertyType
    });

    const createdProperty = await property.save();

    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { getProperties, getProperty, createProperty };
