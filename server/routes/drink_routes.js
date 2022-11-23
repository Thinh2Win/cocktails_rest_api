const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByName, getRandomDrink, getDrinkByIngredients, getFilteredDrinkByIngredients } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', getRandomDrink);

drinksRoutes.get('/drink/name', getDrinkByName);

drinksRoutes.get('/drink/search', getDrinkByIngredients);

drinksRoutes.get('/drink/filter', getFilteredDrinkByIngredients);

module.exports = drinksRoutes;