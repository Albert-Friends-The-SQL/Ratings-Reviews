const express = require('express');
const App = express();

App.use(express.static('Client/Dist'))

App.get('/', (req, res) => (
  console.log('Hi there, you conencted to the server')
))


App.listen(3003, () => (
  console.log('Listening on port 3003')
))