const cocktails = require('../models/drink_model.js');
const { createExpressions } = require('../helpers/helpers.js');

const queryRandomDrink = () => {
  return cocktails.aggregate([{$sample: {size: 1}}]);
};

const queryDrinkById = (param) => {
  return cocktails.find({_id: param});
};

const queryDrinkByName = (param) => {
  let name = param.toLowerCase();
  // mongodb uses regex as the equivalent to mysql 'LIKE' query
  let regex = new RegExp(String.raw`${name}`);
  return cocktails.find({name: regex})
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByIngredients = (ingredients) => {
  // ingredients come from route param as string separated by commas
  // need to create regex expressions for mongodb query
  let expressions = createExpressions('search', ingredients);
  return cocktails.find({$and: expressions})
    .then(res => res)
    .catch(err => err);
};

const queryDrinkExcludingIngredients = (ingredients) => {
  let expressions = createExpressions('filter', ingredients);
  return cocktails.find({$and: expressions})
    .then(res => res)
    .catch(err => err);
};

module.exports = {
  queryDrinkByName,
  queryRandomDrink,
  queryDrinkByIngredients,
  queryDrinkExcludingIngredients,
  queryDrinkById
};