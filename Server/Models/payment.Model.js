import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: 'INR'
    },
    receiptId: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Payment = mongoose.model('Payment', paymentSchema);