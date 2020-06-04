DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(20),
  age INT,
  PRIMARY KEY (userId)

);

CREATE TABLE messages (
  messageId INT AUTO_INCREMENT,
  messageText VARCHAR(200),
  room VARCHAR(20),
  messageSenderId INT,
  PRIMARY KEY (messageId),
  FOREIGN KEY (messageSenderId) REFERENCES users (userId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

