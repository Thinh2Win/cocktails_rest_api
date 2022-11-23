const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByName, getRandomDrink, getDrinkByIngredients, getDrinkExcludingIngredients } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', getRandomDrink);

drinksRoutes.get('/drink/name', getDrinkByName);

drinksRoutes.get('/drink/search', getDrinkByIngredients);

drinksRoutes.get('/drink/filter', getDrinkExcludingIngredients);

module.exports = drinksRoutes;