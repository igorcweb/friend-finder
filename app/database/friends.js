import connection from './connection';
import faker from 'faker';

const friendScores = [];
const friends = [];
const scores = [];

const friendsQuery = `INSERT INTO friends (friend_name, avatar) VALUES ?`;
const friendIdQuery = `SELECT MAX(id) as maxId FROM friends`;

const scoresQuery = `INSERT INTO scores (friend_id, question_num, answer_num) VALUES ?`;

const friendsValues = [];
const scoresValues = [];

// Random friend paramenters
const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const randomAvatar = faker.image.avatar();

const randomScore = function() {
  return Math.floor(Math.random() * 5) + 1;
};

//Create new friend data
const newFriend = function(name, avatar) {
  //Create new friend
  friendsValues.push([name, avatar]);
  connection.query(friendsQuery, [friendsValues], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result.affectedRows);
  });
  //Get friend's id
  connection.query(friendIdQuery, (err, result) => {
    if (err) {
      throw err;
    }
    let maxId = result[0].maxId;

    //Generate  10 question_num and answer_num values associated with last added friend's id
    for (let i = 1; i <= 10; i++) {
      scoresValues.push([maxId, i, friendScores[i] || randomScore()]);
    }
    connection.query(scoresQuery, [scoresValues], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result.affectedRows);
    });
  });
};

//Run this function to create a new random friend
//newFriend(randomName, randomAvatar);

const joinFriendsQuery = `SELECT id, friend_name, avatar FROM friends INNER JOIN scores on friends.id = scores.friend_id GROUP BY friends.id;`;

const joinScoresQuery = `SELECT friend_id, question_num, answer_num from scores INNER JOIN friends on scores.friend_id = friends.id`;

const joinQuery = `SELECT * FROM friends INNER JOIN scores on friends.id = scores.friend_id`;

// connection.query(joinQuery, (err, result) => {
//   result.forEach(item => {
//     console.log(item.question_num);
//     console.log(item.answer_num);
//   });
// });

// connection.query(joinScoresQuery, (err, result) => {
//   if (err) {
//     throw err;
//   }
//   result.forEach(item => {
//     const { friend_id, question_num, answer_num } = item;
//     console.log('id:', friend_id);
//     console.log('question_num:', question_num);
//     console.log('answer_num:', answer_num);
//   });
// });

// connection.query(joinFriendsQuery, (err, result) => {
//   if (err) {
//     throw err;
//   }
//   result.forEach((item, index) => {
//     const { friend_name, avatar } = item;
//     const newFriend = {
//       name: friend_name,
//       avatar: avatar
//     };
//     friends.push(newFriend);
//     if (result.length === index + 1) {
//       return friends;
//     }
//   });
// });
