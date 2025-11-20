import { Router } from 'express';
import * as c from '../controllers/savingsController.js';

const router = Router();

router.get('/', c.listGoals);
router.post('/', c.createGoal);
router.patch('/:id', c.updateGoal);
router.post('/:id/progress', c.addProgress);
router.delete('/:id', c.deleteGoal);

export default router;
