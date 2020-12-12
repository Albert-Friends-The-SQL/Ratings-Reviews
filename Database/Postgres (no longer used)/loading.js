const faker = require('faker/locale/en.js');
const db = require('./index');
const neo = require('./neoindex');

const userPath = __dirname + "/../users.csv";
const reviewsPath = __dirname + "/../reviews.csv";

console.log(__dirname);
db.pool.query(`COPY users(user_name) FROM '${userPath}' DELIMITER ' ' CSV HEADER;`, (err, result) => {
  if (err) {
    console.log(__dirname);
    console.log(err);
  } else {
    console.log("Users imported");
    db.pool.query(`COPY reviews(product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id) FROM '${reviewsPath}' DELIMITER ',' CSV HEADER;`, (err, result) => {
      if (err) {
        console.log(__dirname);
        console.log(err);
      } else {
        console.log("SUCCESS");
      }
    })
  }
})

