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
  connection.query('INSERT INTO users (user, user_email) values (kennection, kennectionmail)')
  .then((sucess) => (
    console.log(success)
    // connection.query(`SELECT id FROM users WHERE user = ${obj.user}`)
  ))
  .catch((err) => {
    console.log(err)
  })
  .then((successer) => {
    callback(null, successer)
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
// export default connection;

// INSERT INTO reviews (product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id) values)