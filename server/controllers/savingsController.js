import { SavingsGoal } from '../models/SavingsGoal.js';

export const listGoals = async (req, res) => {
  const goals = await SavingsGoal.find({}).sort({ createdAt: -1 });
  res.json({ goals });
};

export const createGoal = async (req, res) => {
  const goal = await SavingsGoal.create(req.body);
  res.status(201).json({ goal });
};

export const updateGoal = async (req, res) => {
  const goal = await SavingsGoal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ goal });
};

export const addProgress = async (req, res) => {
  const goal = await SavingsGoal.findById(req.params.id);
  goal.currentAmount += Number(req.body.amount);
  goal.history.push({ amount: Number(req.body.amount), date: new Date() });
  await goal.save();
  res.json({ goal });
};

export const deleteGoal = async (req, res) => {
  await SavingsGoal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Goal deleted' });
};
