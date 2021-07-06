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
      required: false
    },
    tenantId: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
