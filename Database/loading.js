const faker = require('faker/locale/en.js');
const db = require('./index');
const neo = require('./neoindex');

const userPath = __dirname + '/users.csv';
const reviewsPath = __dirname + '/reviews.csv';

db.pool.query(`COPY users(user_name) FROM '${userPath}' (DELIMITER(','));`, (err, result) => {
  if (err) {
    console.log(__dirname);
    console.log(err);
  } else {
    db.pool.query(`COPY reviews(product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended) FROM '${reviewsPath}' (DELIMITER(','));`, (err, result) => {
      if (err) {
        console.log(__dirname);
        console.log(err);
      } else {
        console.log("SUCCESS");
      }
    })
  }
})

neo.session.run("LOAD CSV WITH HEADERS FROM 'file:///users.csv' AS users MERGE (user:User {id: toInteger(users.id), userName: users.user_name});")
.then(result => {
  console.log(result);
})