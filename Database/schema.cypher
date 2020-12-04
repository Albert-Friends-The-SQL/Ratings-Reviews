CREATE OR REPLACE DATABASE reviews;

// Products

id, name
1, "UltraBoosts"

// Reviews

id, productId, reviewTitle, reviewDescription, reviewDate, reviewVerified, sizeRating, widthRating, comfortRating, qualityRating, ratingsValue, helpfulY, helpfulN, recommended, userID


// Users

id, userName
1, "blade117"

CREATE CONSTRAINT personIdConstraint ON (user:User) ASSERT user.id IS UNIQUE;
// CREATE CONSTRAINT reviewIDConstraint ON (review:Review) ASSERT review.id IS UNIQUE;
CREATE CONSTRAINT productIdConstraint ON (product:Product) ASSERT product.id IS UNIQUE;
CREATE CONSTRAINT reviewIdConstraint ON (review:Review) ASSERT review.id IS UNIQUE;



LOAD CSV WITH HEADERS FROM "file:///users.csv" AS users
CREATE (user:User {id: toInteger(users.id), userName: users.user_name})

LOAD CSV WITH HEADERS FROM "file:///products.csv" AS products;
CREATE (product:Product {id: product_id, name: product_name})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS reviews;
CREATE (review:Review {
  id: toInteger(reviews.id),
  productId: toInteger(reviews.product_id),
  reviewTitle: reviews.review_title,
  reviewDescription: reviews.review_description,
  reviewDate: reviews.review_date,
  reviewVerified: reviews.verified,
  sizeRating: toInteger(reviews.size),
  widthRating: toInteger(reviews.width),
  comfortRating: toInteger(reviews.comfort),
  qualityRating: toInteger(reviews.quality),
  ratingsValue: toInteger(reviews.value),
  helpfulYes: toInteger(reviews.helpfulY),
  helpfulNo: toInteger(reviews.helpfulN),
  recommended: reviews.recommended,
  userId: toInteger(reviews.user_id)
})
MATCH (user:User {id: toInteger(reviews.user_id)}), (review:Review {userId: reviews.user_id})
CREATE (user) -[:WROTE]-> (review)
MATCH (review:Review {productId: toInteger(reviews.product_id)}), (product:Product {id: toInteger(reviews.product_id)})
CREATE (review) -[:WRITTENFOR]-> (product)