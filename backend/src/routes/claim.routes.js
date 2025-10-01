import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  res.json({ message: 'Get all claims' });
});

router.post('/', protect, authorize('customer'), async (req, res) => {
  res.json({ message: 'Submit new claim' });
});

router.get('/:id', protect, async (req, res) => {
  res.json({ message: `Get claim ${req.params.id}` });
});

router.post('/:id/approve', protect, authorize('insurance'), async (req, res) => {
  res.json({ message: `Approve claim ${req.params.id}` });
});

router.post('/:id/reject', protect, authorize('insurance'), async (req, res) => {
  res.json({ message: `Reject claim ${req.params.id}` });
});

export default router;
