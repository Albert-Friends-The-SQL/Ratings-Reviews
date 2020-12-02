DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

\c adidas;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name varchar(256),
  user_email varchar(256),
  UNIQUE(user_name, user_email)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
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
  recommended varchar(16),
  user_id int
);