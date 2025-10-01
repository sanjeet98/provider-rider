import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/transactions', protect, async (req, res) => {
  res.json({ message: 'Get transaction history' });
});

router.post('/topup', protect, authorize('customer'), async (req, res) => {
  res.json({ message: 'Top up PAYG wallet' });
});

router.get('/wallet', protect, authorize('customer'), async (req, res) => {
  res.json({ message: 'Get wallet balance' });
});

router.post('/payout', protect, authorize('provider'), async (req, res) => {
  res.json({ message: 'Request payout' });
});

export default router;
