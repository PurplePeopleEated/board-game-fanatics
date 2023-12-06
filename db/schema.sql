DROP DATABASE IF EXISTS boardgame_db;
CREATE DATABASE boardgame_db;

USE boardgame_db;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  pass TEXT NOT NULL
);

CREATE TABLE Boardgame (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  min INT NOT NULL,
  max INT NOT NULL,
  timeToPlay INT NOT NULL,
  User_id INT,
  FOREIGN KEY(User_id)
  REFERENCES User(id)
  ON DELETE SET NULL
);

INSERT INTO User (username, email, pass)
VALUES ('Julian', 'jbear97@email.com', 'password1234');

INSERT INTO Boardgame (title, min, max, timeToPlay)
VALUES ('sampletitle', 2, 6, 20);
