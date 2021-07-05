import mongoose from "mongoose";

const accountSchema = mongoose.Schema(
  {
    accountType: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    currentStatus: {
      type: String,
      required: true
    },
    currentBalance: {
      type: Number,
      required: true
    },
    nextBillingDate: {
      type: Date
    },
    lastBillingDate: {
      type: Date
    },
    propertyId: {
      type: String,
      required: true
    },
    tenantId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
