const neo4j = require('neo4j-driver');

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "monkey11"));
const session = driver.session();

const getReviews = (callback) => {
  pool.query('SELECT * FROM users, reviews WHERE users.id = reviews.user_id', (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const postReview = (obj, callback) => {
  pool.query(`INSERT INTO users (user_name, user_email) values ('${obj.user}', '${obj.user_email}')`)
    .then((success) => {
      return pool.query(`SELECT id from users WHERE '${obj.user}' = users.user`)
    })
    .catch((err) => {
      callback(err)
    })
    .then((id) => {
      return pool.query(`INSERT INTO reviews (product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id) values (1337, '${obj.review_title}', '${obj.description}', '${obj.review_date}', '${obj.verified}', ${obj.size}, ${obj.width}, ${obj.comfort}, ${obj.quality}, ${obj.value}, ${obj.helpfulY}, ${obj.helpfulN}, '${obj.recommended}', ${id[0].id})`)
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
    pool.query(`UPDATE reviews SET helpfulY = helpfulY + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  } else {
    pool.query(`UPDATE reviews SET helpfulN = helpfulN + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  }
}


module.exports = { session };