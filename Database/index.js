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

module.exports = { connection, getReviews, updateHelpful };
// export default connection;