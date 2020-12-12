const express = require('express');
const db = require('../Database/neoindex.js');
const newrelic = require('newrelic');
newrelic.instrumentLoadedModule(
  'express',
  express
)
const App = express();

App.use(express.static('Client/Dist'));
App.use(express.json());

App.get('/', (req, res) => (
  console.log('Hi there, you conencted to the server')
));

App.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.params.id, (err, success) => {
    if (err) {
      res.status(404).send('Error retreiving reviews');
    } else {
      res.status(200).send(success.records);
    }
  });
});

App.post('/api/reviews', (req, res) => {
  db.postReview(req.body, (err, success) => {
    if (err) {
      res.status(404).send('Error posting review to DB')
    } else {
      res.status(200).send(success);
    }
  })
})

App.put('/api/reviews', (req, res) => {
  db.updateHelpful(req.body.id, req.body.helpful.toLowerCase(), (err, success) => {
    if (err) {
      res.status(404).send('Error updating helpful number')
    } else {
      res.status(200).send(success);
    }
  })
})

App.listen(3003, () => (
  console.log('Listening on port 3003')
))