import mongoose from "mongoose";

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
      type: String
    },
    DOB: {
      type: Date,
      required: true
    },
    emailAddress: {
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
