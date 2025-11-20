import { Router } from 'express';
import * as c from '../controllers/billController.js';

const router = Router();

router.get('/', c.listBills);
router.post('/', c.createBill);
router.put('/:id', c.updateBill);
router.patch('/:id/settle', c.settleShare);
router.post('/:id/remind', c.sendReminder);
router.delete('/:id', c.deleteBill);

export default router;
