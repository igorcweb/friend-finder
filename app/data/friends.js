import faker from 'faker';

const friends = [];

const createScores = function() {
  const scores = [];
  for (let i = 0; i < 5; i++) {
    scores.push(Math.floor(Math.random() * 5) + 1);
  }
  return scores;
};

for (let i = 0; i < 20; i++) {
  var newFriend = {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    scores: createScores()
  };
  friends.push(newFriend);
}

export default friends;
