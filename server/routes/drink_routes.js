const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByName, getRandomDrink, getDrinkByIngredients } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', (req, res) => {
  getRandomDrink()
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
});

drinksRoutes.get('/drink/ingredients', (req, res) => {
  getDrinkByIngredients(req.query.i)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
});

drinksRoutes.get('/drink/name', (req, res) => {
  getDrinkByName(req.query.n)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
});

module.exports = drinksRoutes;