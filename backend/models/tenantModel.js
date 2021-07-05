import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";

const tenantSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    contactNumber: {
      type: Number
    },
    DOB: {
      type: Date,
      required: true
    },
    accountId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;
