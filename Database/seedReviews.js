const faker = require('faker/locale/en.js');
const fs = require('file-system');
const argv = require('yargs').argv
// const db = require('./index');
const reviewStream = fs.createWriteStream("/var/lib/neo4j/import/reviews.csv")
const lines = argv.lines || 10000000;

const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5 };
  const helpfulRange = { min: 0, max: 50 };
  const recommended = faker.random.boolean();
  return {
    user: faker.internet.userName(),
    review_title: faker.company.catchPhrase(),
    description: faker.company.catchPhrase(),
    review_date: faker.date.recent(),
    size: faker.random.number(ratingRange),
    width: faker.random.number(ratingRange),
    comfort: faker.random.number(ratingRange),
    quality: faker.random.number(ratingRange),
    verified: faker.random.boolean(),
    value: faker.random.number(ratingRange),
    helpfulY: faker.random.number(helpfulRange),
    helpfulN: faker.random.number(helpfulRange),
    recommended: `${recommended ? 'Yes' : 'No'}`,
    productID: faker.random.number({min: 1, max: 10000000}),
    productName: faker.random.word(),
    userID: faker.random.number({min: 1, max: 10000000})
  };
};
const startWritingReview = (writeStream, encoding, done) => {
  let i = 0;
    function writing() {
    let canWrite = true;
    do {
      i++;
      let newReview = reviewBuilder();
      let review = `${i},${newReview.productID},${newReview.review_title},${newReview.description},${newReview.review_date},${newReview.verified},${newReview.size},${newReview.width},${newReview.comfort},${newReview.quality},${newReview.value},${newReview.helpfulY},${newReview.helpfulN},${newReview.recommended},${newReview.userID}\n`;
      if(i === 10000000) {
        writeStream.write(review, encoding, done)
      } else{
        canWrite = writeStream.write(review, encoding)
      }
    } while(i < 10000000 && canWrite)

    if (i < 10000000) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
reviewStream.write(`id,product_id,review_title,description,review_date,verified,size,width,comfort,quality,value,helpfulY,helpfulN,recommended,user_id\n`, 'utf-8');
//invoke startWriting and pass callback

startWritingReview(reviewStream, 'utf-8', () => {
  reviewStream.end();
  console.log("Reviews uploaded");
})
