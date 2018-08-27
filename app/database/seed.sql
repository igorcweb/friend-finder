DROP DATABASE IF EXISTS friend_finder;
CREATE DATABASE friend_finder;

USE friend_finder;

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  friend_name VARCHAR(100) NOT NULL,
  avatar VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE scores  (
  friend_id INT NOT NULL,
  question_num INT NOT NULL,
  answer_num INT NOT NULL
);

DESC friends;
DESC scores;