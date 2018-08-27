import express from 'express';
const router = express.Router();
import path from 'path';

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/survey', (req, res) => {
  res.render('survey');
});

export default router;
