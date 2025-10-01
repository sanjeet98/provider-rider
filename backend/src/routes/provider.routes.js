import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, authorize('admin'), async (req, res) => {
  res.json({ message: 'Get all providers' });
});

router.get('/:id', protect, async (req, res) => {
  res.json({ message: `Get provider ${req.params.id}` });
});

router.get('/:id/jobs', protect, authorize('provider'), async (req, res) => {
  res.json({ message: `Get provider jobs` });
});

router.get('/:id/earnings', protect, authorize('provider'), async (req, res) => {
  res.json({ message: `Get provider earnings` });
});

export default router;
