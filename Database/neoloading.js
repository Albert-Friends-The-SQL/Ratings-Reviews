const neo = require('./neoindex.js');

neo.session.run("MATCH (n) DETACH DELETE n")
.then(result => {
  neo.session.run("LOAD CSV WITH HEADERS FROM 'file:///users.csv' AS users MERGE (user:User {userName: users.user_name});")
  .then(result => {
    console.log("First success");
    neo.session.run("LOAD CSV WITH HEADERS FROM 'file:///products.csv' AS products MERGE (product:Product {name: products.name});")
    .then(result => {
      console.log("Success");
    })
  })
  .catch(error => {
    console.log(error);
  })
})
.catch(error => {
  console.log(error);
})