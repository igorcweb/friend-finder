const bestMatch = function(userScores, friends) {
  const results = [];
  //iterating over friends API
  friends.forEach((friend, index) => {
    //converting scores into numbers
    friend.scores = friend.scores.map(num => {
      return parseInt(num);
    });
    //calculating the difference between corresponing answers
    let difference = [];
    userScores.forEach((num, index) => {
      difference.push(num - friend.scores[index]);
    });
    //converting negative numbers into positive
    difference = difference
      .map(num => {
        if (num < 0) {
          return num * -1;
        }
        return num;
      })
      //calculating compatibility score by adding the numbers together (the smallest number wins)
      .reduce((acc, num) => {
        return acc + num;
      });

    results.push(difference);
  });

  //smallest number in the results array
  let smallest = Math.min.apply(Math, results);
  let matchIndex = results.indexOf(smallest);
  const match = friends[matchIndex];
  console.log('match: ', match);
};

const getBestMatch = function() {
  axios
    .get('/api/friends')
    .then(response => {
      friendsApi = response.data;
      let user = friendsApi[friendsApi.length - 1];
      userScores = user.scores.map(num => {
        return parseInt(num);
      });
      //removing the last friend from the API array
      friendsApi.splice(-1, 1);
      console.log('friends: ', friendsApi);
      console.log('user:', user);
      bestMatch(userScores, friendsApi);
    })
    .catch(err => {
      console.log(err);
    });
};

// $('#submit').on('reload', () => {
//   setTimeout(() => {
//     getBestMatch();
//   }, 1000);
// });

// axios
//   .get('/api/friends')
//   .then(result => {
//     console.log(result.data);
//   })
//   .catch(err => {
//     console.log('Err:', err);
//   });
