const neo = require('./neoindex.js');

neo.session.run("call apoc.periodic.iterate('MATCH (n) RETURN n', 'DETACH DELETE n',{batchSize:10000}) yield batches, total return batches, total;")
.then(result => {
  console.log("Results deleted");
  neo.session.run("USING PERIODIC COMMIT 50000 LOAD CSV WITH HEADERS FROM 'file:///users.csv' AS users CREATE (user:User {id: toInteger(users.id), userName: users.user_name});")
  .then(result => {
    console.log("First success");
    neo.session.run("USING PERIODIC COMMIT 50000 LOAD CSV WITH HEADERS FROM 'file:///products.csv' AS products CREATE (product:Product {id: toInteger(products.id), name: products.name});")
    .then(result => {
      console.log("Success");
      neo.session.run("USING PERIODIC COMMIT 50000 LOAD CSV WITH HEADERS FROM 'file:///reviews.csv' AS reviews CREATE (review:Review {id: toInteger(reviews.id),productId: toInteger(reviews.product_id),reviewTitle: reviews.review_title,reviewDescription: reviews.description,reviewDate: reviews.review_date,reviewVerified: reviews.verified,sizeRating: toInteger(reviews.size),widthRating: toInteger(reviews.width),comfortRating: toInteger(reviews.comfort),qualityRating: toInteger(reviews.quality),ratingsValue: toInteger(reviews.value),helpfulYes: toInteger(reviews.helpfulY),helpfulNo: toInteger(reviews.helpfulN),recommended: reviews.recommended,userId: toInteger(reviews.user_id)});")
      .then(result => {
        console.log("Reviews imported")
        neo.session.run("call apoc.periodic.iterate('MATCH (user:User), (review:Review) WHERE user.id = review.userId RETURN (user), (review)', 'CREATE (user) -[:WROTE]-> (review);', {batchSize: 10000, parallel: true, iterateList: true}) yield batches, total return batches, total;")
        .then(result => {
          console.log("user and review relationships created");
          neo.session.run("call apoc.periodic.iterate('MATCH (review:Review), (product:Product) WHERE review.productId = product.id RETURN (review), (product)', 'CREATE (review) -[:WRITTENFOR]-> (product);', {batchSize:10000, parallel: true, iterateList: true})")
          .then(result => {
            console.log("WE DID IT");
          })
        })
        .catch(error => {
          console.log(error);
        })
      })
      .catch(error => {
        console.log(error);
      })
    })
    .catch(error => {
      console.log(error);
    })
  })
  .catch(error => {
    console.log(error);
  })
})
.catch(error => {
  console.log(error);
})

