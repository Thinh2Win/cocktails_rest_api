const { queryDrinkByName, queryRandomDrink, queryDrinkByIngredients } = require('../models/drink_model.js');

const getRandomDrink = () => {
  return queryRandomDrink()
    .then(res => res[0])
    .catch(err => err);
};

const getDrinkByName = (name) => {
  return queryDrinkByName(name)
    .then(res => res.map(drinks => drinks.jsonb_strip_nulls))
    .catch(err => err);
};

const getDrinkByIngredients = (ingredient) => {
  return queryDrinkByIngredients(ingredient)
    .then(res => res.map(drinks => drinks.jsonb_strip_nulls))
    .catch(err => err);
};

module.exports = {
  getDrinkByName,
  getRandomDrink,
  getDrinkByIngredients
};