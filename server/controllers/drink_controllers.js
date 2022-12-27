const { cache } = require ('../db/db.js');
const { addToCache } = require('../helpers/helpers.js');

const { queryDrinkByName, queryRandomDrink, queryDrinkByIngredients, queryDrinkExcludingIngredients, queryDrinkById } = require('../services/drink_service.js');

const getRandomDrinkHandler = (req, res) => {
  queryRandomDrink()
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const getDrinkByIdHandler = (req, res) => {
  let id = req.query.id;
  queryDrinkById(id)
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const getDrinkByNameHandler = (req, res) => {
  let name = req.query.n;
  cache.get(name)
    .then(data => {
      if (data) {
        res.send(JSON.parse(data));
      } else {
        addToCache(name, queryDrinkByName)
          .then(drinks => res.send(drinks));
      }
    })
    .catch(err => res.status(404).send(err));
};

const getDrinkByIngredientsHandler = (req, res) => {
  let ingredients = req.query.i;

  cache.get(ingredients)
    .then(data => {
      if (data) {
        res.send(JSON.parse(data));
      } else {
        addToCache(ingredients, queryDrinkByIngredients, 'search:')
          .then(drinks => res.send(drinks));
      }
    })
    .catch(err => res.status(404).send(err));
};

const getDrinkExcludingIngredientsHandler = (req, res) => {
  let ingredients = req.query.i;

  cache.get(ingredients)
    .then(data => {
      if (data) {
        res.send(JSON.parse(data));
      } else {
        addToCache(ingredients, queryDrinkExcludingIngredients, 'filter:')
          .then(drinks => res.send(drinks));
      }
    })
    .catch(err => res.status(404).send(err));
};

module.exports = {
  getDrinkByNameHandler,
  getRandomDrinkHandler,
  getDrinkByIngredientsHandler,
  getDrinkExcludingIngredientsHandler,
  getDrinkByIdHandler
};