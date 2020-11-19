const mySQL = require('mysql');
const util = require('util');

const connection = mySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'adidas',
});

connection.connect();
connection.query = util.promisify(connection.query);

const getReviews = (callback) => {
  connection.query('SELECT * FROM users, reviews WHERE users.id = reviews.user_id', (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const postReview = (obj, callback) => {
  connection.query(`INSERT INTO users (user, user_email) values ('${obj.user}', '${obj.user_email}')`)
    .then((success) => {
      return connection.query(`SELECT id from users WHERE '${obj.user}' = users.user`)
    })
    .catch((err) => {
      callback(err)
    })
    .then((id) => {
      return connection.query(`INSERT INTO reviews (product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id) values (1337, '${obj.review_title}', '${obj.description}', '${obj.review_date}', '${obj.verified}', ${obj.size}, ${obj.width}, ${obj.comfort}, ${obj.quality}, ${obj.value}, ${obj.helpfulY}, ${obj.helpfulN}, '${obj.recommended}', ${id[0].id})`)
    })
    .catch((err) => {
      console.log(err)
      callback(err)
    })
    .then((reviewPost) => {
      callback(null, reviewPost)
    })

}

const updateHelpful = (id, helpful, callback) => {
  if (helpful === 'yes') {
    connection.query(`UPDATE reviews SET helpfulY = helpfulY + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  } else {
    connection.query(`UPDATE reviews SET helpfulN = helpfulN + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  }
}

module.exports = { connection, getReviews, updateHelpful, postReview };