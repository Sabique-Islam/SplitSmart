import { Router } from 'express';
import * as c from '../controllers/dashboardController.js';

const router = Router();

router.get('/summary', c.getDashboardSummary);

export default router;
