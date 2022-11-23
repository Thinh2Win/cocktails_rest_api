const { queryDrinkByName, queryRandomDrink, queryDrinkByIngredients, queryDrinkExcludingIngredients } = require('../models/drink_model.js');

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
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const getDrinkExcludingIngredients = (req, res) => {
  queryDrinkExcludingIngredients(req.query.i)
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

module.exports = {
  getDrinkByName,
  getRandomDrink,
  getDrinkByIngredients,
  getDrinkExcludingIngredients
};