const express = require('express');
const app = express();
const { getDrinkByName, getRandomDrink, getDrinkByIngredient } = require('./controllers/drink_controllers');
require('dotenv').config();

app.use(express.json());

app.get('/random', (req, res) => {
  getRandomDrink()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.get('/drink', (req, res) => {
  const param = Object.keys(req.query)[0];
  switch (param) {
  case 'ingredient':
    getDrinkByIngredient(req.query.ingredient)
      .then(data => res.send(data))
      .catch(err => res.status(400).send(err));
    break;
  case 'name':
    getDrinkByName(req.query.name)
      .then(data => res.send(data))
      .catch(err => res.status(400).send(err));
    break;
  default:
    res.status(400).send('invalid params');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
