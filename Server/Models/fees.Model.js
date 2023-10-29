import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
            default: "INR",
        },
    },
    { timestamps: true }
);

export const Fee = mongoose.model("Fee", feeSchema);