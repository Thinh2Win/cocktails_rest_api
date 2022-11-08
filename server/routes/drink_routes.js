const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByName, getRandomDrink, getDrinkByIngredients } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', getRandomDrink);

drinksRoutes.get('/drink/search', getDrinkByName);

drinksRoutes.get('/drink/ingredients', getDrinkByIngredients);

module.exports = drinksRoutes;