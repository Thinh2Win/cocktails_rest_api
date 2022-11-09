const { cocktails } = require('../../server/db/db.js');
const { pascalCase, createExpressions } = require('../helpers/helpers.js');
const queryRandomDrink = () => {
  return cocktails.aggregate([{$sample: {size: 1}}])
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByName = (param) => {
  // cocktails in db have 1st letters capitol so we need to change our params to match
  let name = pascalCase(param);
  // mongodb uses regex as the equivalent to mysql 'LIKE' query
  let regex = new RegExp(String.raw`${name}`);
  return cocktails.find({Name: regex})
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByIngredients = (ingredients) => {
  // ingredients come from route param as string separated by commas
  let expressions = createExpressions('Ingredients', ingredients);
  return cocktails.find({$and: expressions})
    .then(res => res)
    .catch(err => err);
};

module.exports = {
  queryDrinkByName,
  queryRandomDrink,
  queryDrinkByIngredients
};