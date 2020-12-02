const faker = require('faker/locale/en.js');
const db = require('./index');
// const db = require('./index');

const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5 };
  const helpfulRange = { min: 0, max: 50 };
  const recommended = faker.random.boolean();

  return {
    user_email: faker.internet.email(),
    user: faker.internet.userName(),
    review_title: faker.company.catchPhrase(),
    description: faker.company.catchPhrase(),
    review_date: faker.date.recent().toString().split('').slice(0, 15).join(''),
    // review_date: faker.date.recent().toString(),
    ratings: {
      size: faker.random.number(ratingRange),
      width: faker.random.number(ratingRange),
      comfort: faker.random.number(ratingRange),
      quality: faker.random.number(ratingRange),
      value: faker.random.number(ratingRange),
      helpfulY: faker.random.number(helpfulRange),
      helpfulN: faker.random.number(helpfulRange),
      recommended: `${recommended ? 'Yes' : 'No'}`
    },
  };
};

for (let i = 0; i < 200; i++) {
  const newReview = reviewBuilder();
  db.pool.query(`INSERT INTO users (
  user_name,
  user_email) values (
    '${newReview.user}',
    '${newReview.user_email}')`)
    .then(() => (
      db.pool.query(`INSERT INTO reviews (
      product_id,
      review_title,
      description,
      review_date,
      verified,
      size,
      width,
      comfort,
      quality,
      value,
      helpfulY,
      helpfulN,
      recommended,
      user_id
      ) values (
        1337,
        '${newReview.review_title}',
        '${newReview.description}',
        '${newReview.review_date}',
        'Yes',
        ${newReview.ratings.size},
        ${newReview.ratings.width},
        ${newReview.ratings.comfort},
        ${newReview.ratings.quality},
        ${newReview.ratings.value},
        ${newReview.ratings.helpfulY},
        ${newReview.ratings.helpfulN},
        '${newReview.ratings.recommended}',
        ${i + 1})`)
    ))
    .then(() => {
      if (i === 4) {
        console.log('Successfully posted fake review data to the DB');
      }
    });
}
