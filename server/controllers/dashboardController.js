import { Expense } from '../models/Expense.js';
import { Bill } from '../models/Bill.js';
import { SavingsGoal } from '../models/SavingsGoal.js';

export const getDashboardSummary = async (req, res) => {
  const [recentExpenses, outstandingBills, goals] = await Promise.all([
    Expense.find({}).sort({ createdAt: -1 }).limit(5),
    Bill.find({}).sort({ dueDate: 1 }).limit(5),
    SavingsGoal.find({}).limit(3),
  ]);

  res.json({
    recentExpenses,
    outstandingBills,
    goals,
    summary: {
      monthlySpend: recentExpenses.reduce((acc, exp) => acc + exp.amount, 0),
      outstanding: outstandingBills.reduce((acc, bill) => acc + bill.total, 0),
    },
  });
};
