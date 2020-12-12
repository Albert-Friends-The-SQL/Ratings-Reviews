DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

\c adidas;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name varchar(256)
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
  user_id int,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- SELECT users.user_name, reviews.review_title, reviews.description, reviews.review_date, reviews.verified, reviews.size, reviews.width, reviews.comfort, reviews.quality, reviews.value, reviews.helpfulY, reviews.helpfulN, reviews.recommended from reviews INNER JOIN users ON reviews.user_id = users.id WHERE reviews.product_id = 3858274;

-- EXPLAIN ANALYZE SELECT users.user_name, reviews.review_title, reviews.description, reviews.review_date, reviews.verified, reviews.size, reviews.width, reviews.comfort, reviews.quality, reviews.value, reviews.helpfulY, reviews.helpfulN, reviews.recommended from reviews INNER JOIN users ON reviews.user_id = users.id WHERE reviews.product_id = 3858274;
