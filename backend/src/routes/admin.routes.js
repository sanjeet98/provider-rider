import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.use(protect, authorize('admin')); // All routes require admin role

router.get('/dashboard', async (req, res) => {
  res.json({ message: 'Get dashboard stats' });
});

router.get('/users', async (req, res) => {
  res.json({ message: 'Get all users' });
});

router.get('/analytics', async (req, res) => {
  res.json({ message: 'Get analytics data' });
});

export default router;
