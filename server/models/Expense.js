import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    category: { type: String, default: 'general' },
    type: { type: String, default: 'personal' },
    splitWith: [{ participantName: String, share: Number, settled: Boolean }],
    date: { type: Date, default: Date.now },
    notes: String,
    status: { type: String, default: 'recorded' },
  },
  { timestamps: true }
);

export const Expense = mongoose.model('Expense', expenseSchema);
