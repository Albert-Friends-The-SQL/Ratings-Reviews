const faker = require('faker/locale/en.js');

// console.log(faker.random.words());
console.log(faker.date.between('2015-01-01', '2015-01-05'));
console.log(faker.date.recent().toString().split('').slice(0, 15).join(''));