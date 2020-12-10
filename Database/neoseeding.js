const faker = require('faker/locale/en.js');
const db = require('./index');
const fs = require('file-system');
const argv = require('yargs').argv
// const db = require('./index');
const userStream = fs.createWriteStream("/var/lib/neo4j/import/users.csv")
const productStream = fs.createWriteStream("/var/lib/neo4j/import/products.csv")
const reviewStream = fs.createWriteStream("/var/lib/neo4j/import/reviews.csv")
const lines = argv.lines || 10000000;

const userBuilder = () => {
  return {
    user: faker.internet.userName(),
  };
}

const productBuilder = () => {
  return {
    productName: faker.random.word(),
  }
}

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
    value: faker.random.number(ratingRange),
    helpfulY: faker.random.number(helpfulRange),
    helpfulN: faker.random.number(helpfulRange),
    recommended: `${recommended ? 'Yes' : 'No'}`,
    productID: faker.random.number({min: 1, max: 10000000}),
    productName: faker.random.word(),
    userID: faker.random.number({min: 1, max: 10000000})
  };
};

const startWritingUser = (writeStream, encoding, done) => {
  let i = 0
  function writing() {
    let canWrite = true;
    do {
      i++;
      let newUser = userBuilder();
      let user = `${i},${newUser.user}\n`
      //check if i === 0 so we would write and call `done`
      if(i === lines){
        // we are done so fire callback
        writeStream.write(user, encoding, done)
      } else{
        // we are not done so don't fire callback
        canWrite = writeStream.write(user, encoding)
      }
      //else call write and continue looping
    } while(i < lines && canWrite)

    if (i < lines) {
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

const startWritingProduct = (writeStream, encoding, done) => {
  let i = 0
  function writing() {
    let canWrite = true;
    do {
      i++;
      let newProduct = productBuilder();
      let product = `${i},${newProduct.productName}\n`
      //check if i === 0 so we would write and call `done`
      if (i === lines){
        // we are done so fire callback
        writeStream.write(product, encoding, done)
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(product, encoding)
      }
      //else call write and continue looping
    } while (i < lines && canWrite)

    if (i < lines){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

const startWritingReview = (writeStream, encoding, done) => {
  let i = 0;
    function writing() {
    let canWrite = true;
    do {
      i++;
      let newReview = reviewBuilder();
      let review = `${i},${newReview.productID},${newReview.review_title},${newReview.description},${newReview.review_date},${newReview.verified},${newReview.size},${newReview.width},${newReview.comfort},${newReview.quality},${newReview.value},${newReview.helpfulY},${newReview.helpfulN},${newReview.recommended},${newReview.userID}\n`;
      if(i === (lines * 3)){
        writeStream.write(review, encoding, done)
      } else{
        canWrite = writeStream.write(review, encoding)
      }
    } while(i < (lines * 3) && canWrite)

    if (i < (lines * 3)){
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
userStream.write(`id,user_name\n`, 'utf-8');
productStream.write(`id,name\n`, 'utf-8');
reviewStream.write(`id,product_id,review_title,description,review_date,verified,size,width,comfort,quality,value,helpfulY,helpfulN,recommended,user_id\n`, 'utf-8');
//invoke startWriting and pass callback
startWritingUser(userStream, 'utf-8', () => {
  userStream.end();
  console.log("Users uploaded")
  startWritingProduct(productStream, 'utf-8', () => {
    productStream.end();
    console.log("Products Uploaded");
    startWritingReview(reviewStream, 'utf-8', () => {
      reviewStream.end();
      console.log("Reviews uploaded");
    })
  })
})
