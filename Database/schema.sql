DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

USE adidas;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  user varchar(256),
  user_email varchar(256),
  PRIMARY KEY (id),
  UNIQUE(user, user_email)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  review_title varchar(256),
  description varchar(256),
  review_date varchar(256),
  verified varchar(16),
  size int NOT NULL,
  width int NOT NULL,
  comfort int NOT NULL,
  quality int NOT NULL,
  value int NOT NULL,
  helpfulY int NOT NULL,
  helpfulN int NOT NULL,
  user_id int,
  PRIMARY KEY (id),
  UNIQUE (product_id)
);