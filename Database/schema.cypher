MATCH (n) DETACH DELETE n;

USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "file:///usersTest.csv" AS users
CREATE (user:User {id: toInteger(users.id), userName: users.user_name});

USING PERIODIC COMMIT 50000
LOAD CSV WITH HEADERS FROM "file:///productsTest.csv" AS products
CREATE (product:Product {id: toInteger(products.id), name: products.name});

USING PERIODIC COMMIT 50000
LOAD CSV WITH HEADERS FROM "file:///reviewsTest.csv" AS reviews
CREATE (review:Review {
  id: toInteger(reviews.id),
  productId: toInteger(reviews.product_id),
  reviewTitle: reviews.review_title,
  reviewDescription: reviews.description,
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
});
MATCH (user:User), (review:Review)
WHERE user.id = review.userId
CREATE (user) -[:WROTE]-> (review);
MATCH (review:Review), (product:Product)
WHERE review.productId = product.id
CREATE (review) -[:WRITTENFOR]-> (product);


CREATE CONSTRAINT personIdConstraint ON (user:User) ASSERT user.id IS UNIQUE;
CREATE CONSTRAINT productIdConstraint ON (product:Product) ASSERT product.id IS UNIQUE;
CREATE CONSTRAINT reviewIdConstraint ON (review:Review) ASSERT review.id IS UNIQUE;