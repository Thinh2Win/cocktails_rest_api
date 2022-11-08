const { queryDrinkByName, queryRandomDrink, queryDrinkByIngredients } = require('../models/drink_model.js');

const getRandomDrink = (req, res) => {
  queryRandomDrink()
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const getDrinkByName = (req, res) => {
  queryDrinkByName(req.query.n)
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const getDrinkByIngredients = (req, res) => {
  queryDrinkByIngredients(req.query.i)
    .then(data => res.send(data.map(drinks => drinks.jsonb_strip_nulls)))
    .catch(err => res.status(404).send(err));
};

module.exports = {
  getDrinkByName,
  getRandomDrink,
  getDrinkByIngredients
};