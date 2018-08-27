import express from 'express';
const router = express.Router();
import friends from '../database/friends';

router.get('/friends', (req, res) => {
  res.json(friends);
});

export default router;
