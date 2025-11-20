import mongoose from 'mongoose';

const savingsGoalSchema = new mongoose.Schema(
  {
    label: String,
    targetAmount: Number,
    currentAmount: { type: Number, default: 0 },
    deadline: Date,
    tips: [String],
    history: [{ date: { type: Date, default: Date.now }, amount: Number }],
  },
  { timestamps: true }
);

export const SavingsGoal = mongoose.model('SavingsGoal', savingsGoalSchema);
