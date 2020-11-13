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

module.exports = connection;
// export default connection;
