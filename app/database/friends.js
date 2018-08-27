import connection from './connection';
import faker from 'faker';

const friends = [];

const friendsQuery = `INSERT INTO friends (friend_name, avatar) VALUES ?`;
const friendIdQuery = `SELECT MAX(id) as maxId FROM friends`;

const scoresQuery = `INSERT INTO scores (friend_id, question_num, answer_num) VALUES ?`;

const joinQuery = `SELECT * FROM friends INNER JOIN scores ON friends.id = scores.friend_id`;

const friendsValues = [];
const scoresValues = [];

// Random friend paramenters
const randomScores = [];
const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;
const randomAvatar = faker.image.avatar();
const generateRandomScores = function() {
  const randomScore = function() {
    return Math.floor(Math.random() * 5) + 1;
  };
  for (let i = 0; i < 10; i++) {
    randomScores.push(randomScore());
  }
  return randomScores;
};

//Get values from two tables
const getValues = function() {
  const addedFriend = {};
  connection.query(joinQuery, (err, result) => {
    if (err) {
      throw err;
    }
    result.forEach(item => {
      const {
        id,
        friend_name,
        avatar,
        friend_id,
        question_num,
        answer_num
      } = item;
      Object.assign(addedFriend, {
        name: friend_name,
        avatar: avatar
      });
      addedFriend[question_num] = answer_num;
    });
    friends.push(addedFriend);
    console.log(friends);
  });
};

//Create new friend data
const newFriend = function(name, avatar, scores) {
  //Create new friend
  friendsValues.push([name, avatar]);
  connection.query(friendsQuery, [friendsValues], (err, result) => {
    if (err) {
      throw err;
    }
    console.log('friend row:', result.affectedRows);
  });
  //Get friend's id
  connection.query(friendIdQuery, (err, result) => {
    if (err) {
      throw err;
    }
    let maxId = result[0].maxId;

    //Generate  10 question_num and answer_num values associated with last added friend's id
    for (let i = 1; i <= 10; i++) {
      scoresValues.push([maxId, i, scores[i - 1]]);
    }
    connection.query(scoresQuery, [scoresValues], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('scores rows:', result.affectedRows);
      getValues();
    });
  });
};

//Run this function to create a new random friend
newFriend(randomName, randomAvatar, generateRandomScores());
