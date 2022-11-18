const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByName, getRandomDrink, getDrinkByIngredients, filterDrinkByIngredients } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', getRandomDrink);

drinksRoutes.get('/drink/name', getDrinkByName);

drinksRoutes.get('/drink/ingredients', getDrinkByIngredients);

drinksRoutes.get('/drink/filter', filterDrinkByIngredients);

module.exports = drinksRoutes;