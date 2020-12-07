const faker = require('faker/locale/en.js');
const db = require('./index');
const fs = require('file-system');
const argv = require('yargs').argv
// const db = require('./index');
const userStream = fs.createWriteStream("/Users/alberto/Library/Application\ Support/com.Neo4j.Relate/Data/dbmss/dbms-fad022a7-6706-40bd-aede-e17f2c5ffb7e/import/users.csv")
const productStream = fs.createWriteStream("/Users/alberto/Library/Application\ Support/com.Neo4j.Relate/Data/dbmss/dbms-fad022a7-6706-40bd-aede-e17f2c5ffb7e/import/products.csv")
const reviewStream = fs.createWriteStream("/Users/alberto/Library/Application\ Support/com.Neo4j.Relate/Data/dbmss/dbms-fad022a7-6706-40bd-aede-e17f2c5ffb7e/import/reviews.csv")
const lines = argv.lines || 1000000;


const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5 };
  const helpfulRange = { min: 0, max: 50 };
  const recommended = faker.random.boolean();

  return {
    user: faker.internet.userName(),
    review_title: faker.company.catchPhrase(),
    description: faker.company.catchPhrase(),
    review_date: faker.date.recent().toString().split('').slice(0, 15).join(''),
    size: faker.random.number(ratingRange),
    width: faker.random.number(ratingRange),
    comfort: faker.random.number(ratingRange),
    quality: faker.random.number(ratingRange),
    value: faker.random.number(ratingRange),
    helpfulY: faker.random.number(helpfulRange),
    helpfulN: faker.random.number(helpfulRange),
    recommended: `${recommended ? 'Yes' : 'No'}`,
    productID: faker.random.number({min: 1, max: 10000000}),
    productName: faker.random.word()
  };
};

const startWritingUser = (writeStream, encoding, done) => {
  let i = lines
  function writing() {
    let canWrite = true;
    do {
      i--;
      let review = reviewBuilder();
      let user = review.user + '\n';
      //check if i === 0 so we would write and call `done`
      if(i === 0){
        // we are done so fire callback
        writeStream.write(user, encoding, done)
      } else{
        // we are not done so don't fire callback
        canWrite = writeStream.write(user, encoding)
      }
      //else call write and continue looping
    } while(i > 0 && canWrite)

    if (i > 0) {
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

const startWritingProduct = (writeStream, encoding, done) => {
  let i = lines
  function writing() {
    let canWrite = true;
    do {
      i--;
      let review = reviewBuilder();
      let product = review.productName + '\n';
      //check if i === 0 so we would write and call `done`
      if (i === 0){
        // we are done so fire callback
        writeStream.write(product, encoding, done)
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(product, encoding)
      }
      //else call write and continue looping
    } while (i > 0 && canWrite)

    if (i > 0){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

const startWritingReview = (writeStream, encoding, done) => {
  let i = lines * 10;
  function writing() {
    let canWrite = true;
    do {
      i--;
      let newReview = reviewBuilder();
      let review = `${newReview.productID},${newReview.review_title},${newReview.description},${newReview.review_date},${newReview.verified},${newReview.size},${newReview.width},${newReview.comfort},${newReview.quality},${newReview.value},${newReview.helpfulY},${newReview.helpfulN},${newReview.recommended}\n`;
      if(i === 0){
        writeStream.write(review, encoding, done)
      } else{
        canWrite = writeStream.write(review, encoding)
      }
    } while(i > 0 && canWrite)

    if (i > 0){
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
userStream.write(`user_name\n`, 'utf-8');
productStream.write(`name\n`, 'utf-8');
reviewStream.write(`product_id,review_title,description,review_date,verified,size,width,comfort,quality,value,helpfulY,helpfulN,recommended,user_id\n`, 'utf-8');
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



// function writeTenMillionUsers(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const username = faker.internet.userName();
//       const avatar = faker.image.avatar();
//       const data = `${id},${username},${avatar}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
// // see if we should continue, or wait
// // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
// // had to stop early!
// // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// fs.writeFile('./Database/users.csv', '', (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.writeFile('./Database/reviews.csv', '', (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.writeFile('./Database/products.txt', '', (err) => {

//       for (let i = 1; i <= 1000000; i++) {
//         let newReview = reviewBuilder();
        // let user = newReview.user + '\n';
        // let review = `${newReview.productID},` + newReview.review_title + ',' +newReview.description + ',' +newReview.review_date + ',' +newReview.verified+','+newReview.size + ',' +newReview.width + ',' +newReview.comfort + ',' +newReview.quality + ',' +newReview.value + ',' +newReview.helpfulY + ',' +newReview.helpfulN + ',' + newReview.recommended + '\n';
//         let product = `${newReview.productID},` + '\n';
//         fs.appendFile('./Database/users.txt', user, (err) => {
//           if (err) {
//             throw err;
//           } else {
//             fs.appendFile('./Database/reviews.txt', review, (err) => {
//               if (err) {
//                 throw err;
//               }
//               fs.appendFile('./Database/products.txt', product, (err) => {
//                 if (err) {
//                   throw err;
//                 }
//                 if (i === 10000000) {
//                   console.log("YAY");
//                   return "Done"
//                 }
//               })
//             })
//           }
//         })
//       }
//     })
//   })
// })



// for (let i = 0; i < 5000; i++) {
//   const newReview = reviewBuilder();
//   db.pool.query(`INSERT INTO users (
//   user_name,
//   user_email) values (
//     '${newReview.user}',
//     '${newReview.user_email}')`)
//     .then(() => (
//       db.pool.query(`INSERT INTO reviews (
//       product_id,
//       review_title,
//       description,
//       review_date,
//       verified,
//       size,
//       width,
//       comfort,
//       quality,
//       value,
//       helpfulY,
//       helpfulN,
//       recommended,
//       user_id
//       ) values (
//         1337,
//         '${newReview.review_title}',
//         '${newReview.description}',
//         '${newReview.review_date}',
//         'Yes',
//         ${newReview.size},
//         ${newReview.width},
//         ${newReview.comfort},
//         ${newReview.quality},
//         ${newReview.value},
//         ${newReview.helpfulY},
//         ${newReview.helpfulN},
//         '${newReview.recommended}',
//         ${i + 1})`)
//     ))
//     .then(() => {
//       if (i === 4) {
//         console.log('Successfully posted fake review data to the DB');
//       }
//     });
// }
