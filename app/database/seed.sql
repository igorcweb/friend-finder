DROP DATABASE IF EXISTS friend_finder;
CREATE DATABASE friend_finder;

USE friend_finder;

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  friend_name VARCHAR(100) NOT NULL,
  avatar VARCHAR(100),
  scores VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

-- CREATE TABLE scores  (
--   friend_id INT NOT NULL,
--   question_num INT NOT NULL,
--   answer_num INT NOT NULL
-- );

-- CREATE TABLE added_friends (
--   id INT AUTO_INCREMENT,
--   friend VARCHAR(1000),
--   PRIMARY KEY(id)
-- );

DESC friends;
-- DESC scores;
-- DESC added_friends;