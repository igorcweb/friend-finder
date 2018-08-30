import express from 'express';
const router = express.Router();
import { addFriend, getFriends } from '../database/friends';

router.get('/friends', (req, res) => {
  getFriends(req, res);
});

router.post('/friends', (req, res) => {
  const { name, avatar, scores } = req.body;
  if (scores.includes('unanswered')) {
    console.log('Please answer all of the questions');
  }
});

export default router;
