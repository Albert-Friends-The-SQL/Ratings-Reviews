import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  // vus: 100,
  // duration: '5s',
  // // iterations: 100
  stages: [
    { duration: "10s", target: 200 },
    { duration: "1s", target: 500 },
    { duration: "5s", target: 800 },
  ],
}
export default function () {
  var index = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3003/api/reviews/${index}`);
}


// call apoc.periodic.iterate('MATCH (user:User) -[r:WROTE]->(review:Review) WHERE user.id = review.userId AND r is null RETURN (user), (review)', 'MERGE (user) -[:WROTE]-> (review);', {batchSize: 1000, parallel: true, iterateList: true}) yield batches, total return batches, total;

// MATCH (user:User), (review:Review) WHERE NOT (user) -[:WROTE]->() AND user.id = review.userId RETURN user, review LIMIT 20;

// MATCH (review:Review), (product:Product) WHERE NOT (review) -[:WRITTENFOR]->() AND review.productId = product.id RETURN review, product LIMIT 20;


// call apoc.periodic.iterate('MATCH (review:Review), (product:Product) WHERE NOT (review) -[:WRITTENFOR]->() AND review.productId = product.id RETURN review, product', 'MERGE (review) -[:WRITTENFOR]-> (product);', {batchSize: 1000, parallel: true, iterateList: true}) yield batches, total return batches, total;