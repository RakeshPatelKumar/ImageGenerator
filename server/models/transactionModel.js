import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    plan: { type: String, required: true },
    credits: { type: Number, required: true },  // ✅ FIXED: Changed Boolean → Number
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    payment: { type: Boolean, default: false }
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
