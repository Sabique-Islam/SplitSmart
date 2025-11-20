import mongoose from 'mongoose';

const billSchema = new mongoose.Schema(
  {
    description: String,
    total: Number,
    participants: [{ name: String, share: Number, settled: { type: Boolean, default: false } }],
    dueDate: Date,
    reminderSent: { type: Boolean, default: false },
    status: { type: String, default: 'open' },
  },
  { timestamps: true }
);

export const Bill = mongoose.model('Bill', billSchema);
