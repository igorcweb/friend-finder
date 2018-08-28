import express from 'express';
const router = express.Router();
import { getFriends } from '../database/friends';

router.get('/friends', (req, res) => {
  getFriends(req, res);
});

export default router;
