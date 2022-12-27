const express = require('express');
const drinksRoutes = express.Router();
const { getDrinkByNameHandler, getRandomDrinkHandler, getDrinkByIngredientsHandler, getDrinkExcludingIngredientsHandler, getDrinkByIdHandler } = require('../controllers/drink_controllers.js');

drinksRoutes.get('/drink', getRandomDrinkHandler);

drinksRoutes.get('/drink/id', getDrinkByIdHandler);

drinksRoutes.get('/drink/name', getDrinkByNameHandler);

drinksRoutes.get('/drink/search', getDrinkByIngredientsHandler);

drinksRoutes.get('/drink/filter', getDrinkExcludingIngredientsHandler);

module.exports = drinksRoutes;