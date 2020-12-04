const faker = require('faker/locale/en.js');
const db = require('./index');
const fs = require('file-system');

const userPath = __dirname + '/users.txt';
const reviewsPath = __dirname + '/reviews.txt';

db.pool.query(`COPY reviews(product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended) FROM '${reviewsPath}' (DELIMITER(','));`, (err, result) => {
  if (err) {
    console.log(__dirname);
    console.log(err);
  } else {
    console.log("SUCCESS");
  }
})