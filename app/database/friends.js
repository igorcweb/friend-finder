import connection from './connection';
import faker from 'faker';

// Random friend paramenters

const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;
const randomAvatar = faker.image.avatar();
const randomScores = [];
const generateRandomScores = function() {
  const randomScore = function() {
    return Math.floor(Math.random() * 5) + 1;
  };
  for (let i = 0; i < 10; i++) {
    randomScores.push(randomScore());
  }
  return randomScores;
};

export const addFriend = function(name, avatar, scores) {
  const addFriendQuery = `INSERT INTO friends (friend_name, avatar, scores) VALUES ?`;
  const values = [];
  let scoresStr = scores.join('');
  values.push([name, avatar, scoresStr]);
  connection.query(addFriendQuery, [values], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result.affectedRows);
  });
};

export const getFriends = function(req, res) {
  const getFriendsQuery = `SELECT friend_name, avatar, scores FROM friends`;
  const friends = [];
  connection.query(getFriendsQuery, (err, result) => {
    if (err) {
      throw err;
    }
    result.forEach(friend => {
      const { friend_name, avatar, scores } = friend;
      const addedFriend = Object.assign(
        {},
        {
          name: friend_name,
          avatar,
          scores: scores.split('')
        }
      );
      friends.push(addedFriend);
    });
    res.json(friends);
  });
};

// Run this function to add a new random friend to database and API
// addFriend(randomName, randomAvatar, generateRandomScores());
