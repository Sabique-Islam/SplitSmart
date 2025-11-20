import { Router } from 'express';
import * as c from '../controllers/expenseController.js';

const router = Router();

router.get('/', c.listExpenses);
router.post('/', c.createExpense);
router.patch('/:id', c.updateExpense);
router.delete('/:id', c.deleteExpense);

export default router;
