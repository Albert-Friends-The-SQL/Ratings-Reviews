const neo4j = require('neo4j-driver');

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "monkey11"));
const session = driver.session();

const getReviews = (product, callback) => {
  session.run(`MATCH (user:User) -[:WROTE]-> (review:Review) -[r:WRITTENFOR]-> (product:Product {id: ${product}}) RETURN user.userName, review.reviewTitle, review.reviewDescription, review.reviewDate, review.reviewVerified, review.sizeRating, review.widthRating, review.comfortRating, review.qualityRating, review.ratingsValue, review.helpfulYes, review.helpfulNo, review.recommended, product.name;`)
  .then(success => {
    callback(null, success);
  })
  .catch(error => {
    callback(error, null);
  });
};

const postReview = (obj, callback) => {
  session.run(`INSERT INTO users (user_name, user_email) values ('${obj.user}', '${obj.user_email}')`)
    .then((success) => {
      return pool.query(`SELECT id from users WHERE '${obj.user}' = users.user`)
    })
    .catch((err) => {
      callback(err)
    })
    .then((id) => {
      return session.run(`INSERT INTO reviews (product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id) values (1337, '${obj.review_title}', '${obj.description}', '${obj.review_date}', '${obj.verified}', ${obj.size}, ${obj.width}, ${obj.comfort}, ${obj.quality}, ${obj.value}, ${obj.helpfulY}, ${obj.helpfulN}, '${obj.recommended}', ${id[0].id})`)
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
    session.run(`UPDATE reviews SET helpfulY = helpfulY + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  } else {
    session.run(`UPDATE reviews SET helpfulN = helpfulN + 1 WHERE id = ${id}`, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success)
      }
    })
  }
}


module.exports = { session, getReviews, postReview, updateHelpful };

// MATCH node = (u:User)-[:REVIEWED]->()-[:TIED_TO]->() WHERE u.id = 7390556 RETURN node


// MATCH (review:Review) WHERE EXISTS((review)-[:WRITTENFOR]->(product))

// MATCH (review:Review {productId: 8385838}) -[r:WRITTENFOR]-> (product:Product {id: 8385838}) USING INDEX product:Product(id) RETURN review.reviewTitle, review.reviewDescription;