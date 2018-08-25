import express from 'express';
import path from 'path';
import friends from './app/data/friends';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});

app.listen(PORT, () => {
  console.log(`FriendFinder is running on localhost:${PORT}`);
});

console.log(friends);
