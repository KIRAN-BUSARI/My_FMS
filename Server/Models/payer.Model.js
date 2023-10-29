import mongoose from "mongoose";

const payerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

export const Payer = mongoose.Model("Payer", payerSchema);