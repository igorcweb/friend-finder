import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`FriendFinder is running on localhost:${PORT}`);
});
