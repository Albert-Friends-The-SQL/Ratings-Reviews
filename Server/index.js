const express = require('express');
const App = express();
const db = require('../Database/index.js');

App.use(express.static('Client/Dist'));

App.get('/', (req, res) => (
  console.log('Hi there, you conencted to the server')
));

App.get('/api/products/1337/reviews', (req, res) => {
  db.getReviews((err, success) => {
    if (err) {
      res.status(404).send('Error retreiving reviews');
    } else {
      res.status(200).send(success);
    }
  });
});

App.listen(3003, () => (
  console.log('Listening on port 3003')
))

//Built out App.get for reviews - to make pull request in morning