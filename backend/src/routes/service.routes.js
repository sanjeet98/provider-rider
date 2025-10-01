import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Placeholder routes - implement controllers as needed
router.get('/', protect, async (req, res) => {
  res.json({ message: 'Get all service requests' });
});

router.post('/', protect, authorize('customer'), async (req, res) => {
  res.json({ message: 'Create service request' });
});

router.get('/:id', protect, async (req, res) => {
  res.json({ message: `Get service request ${req.params.id}` });
});

router.put('/:id', protect, async (req, res) => {
  res.json({ message: `Update service request ${req.params.id}` });
});

router.delete('/:id', protect, authorize('customer'), async (req, res) => {
  res.json({ message: `Cancel service request ${req.params.id}` });
});

router.post('/:id/accept', protect, authorize('provider'), async (req, res) => {
  res.json({ message: `Accept service request ${req.params.id}` });
});

router.post('/:id/complete', protect, authorize('provider'), async (req, res) => {
  res.json({ message: `Complete service request ${req.params.id}` });
});

export default router;
