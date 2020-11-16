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

module.exports = { connection, getReviews };
// export default connection;

//Built out method for retreiving reviews from DB - to make pull request in the morning