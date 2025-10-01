import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.use(protect, authorize('insurance')); // All routes require insurance role

router.get('/claims', async (req, res) => {
  res.json({ message: 'Get all claims for insurance' });
});

router.get('/analytics', async (req, res) => {
  res.json({ message: 'Get claims analytics' });
});

export default router;
