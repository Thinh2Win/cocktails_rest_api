const { cocktails } = require('../../server/db/db.js');
const { createExpressions } = require('../helpers/helpers.js');

const queryRandomDrink = () => {
  return cocktails.aggregate([{$sample: {size: 1}}]);
};

const queryDrinkByName = (param) => {
  let name = param.toLowerCase();
  // mongodb uses regex as the equivalent to mysql 'LIKE' query
  let regex = new RegExp(String.raw`${name}`);
  return cocktails.find({Name: regex})
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByIngredients = (ingredients) => {
  // ingredients come from route param as string separated by commas
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
  queryDrinkExcludingIngredients
};