import { Bill } from '../models/Bill.js';

export const listBills = async (req, res) => {
  const bills = await Bill.find({}).sort({ dueDate: 1 });
  res.json({ bills });
};

export const createBill = async (req, res) => {
  const bill = await Bill.create(req.body);
  res.status(201).json({ bill });
};

export const updateBill = async (req, res) => {
  const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ bill });
};

export const settleShare = async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  const participant = bill.participants.find((p) => p.name === req.body.participantName);
  if (participant) participant.settled = true;
  await bill.save();
  res.json({ bill });
};

export const sendReminder = async (req, res) => {
  await Bill.findByIdAndUpdate(req.params.id, { reminderSent: true });
  res.json({ message: 'Reminder sent' });
};

export const deleteBill = async (req, res) => {
  await Bill.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bill deleted' });
};


