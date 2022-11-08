const { cocktails } = require('../../server/db/db.js');

const queryRandomDrink = () => {
  return cocktails.aggregate([{$sample: {size: 1}}])
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByName = (param) => {
  // cocktails in db have 1st letters capitol so we need to change our params to match
  let name = param.split(' ').map(word => {
    return word.toLowerCase().replace(word[0].toLowerCase(), word[0].toUpperCase());
  }).join(' ');
  // mongodb uses regex as the equivalent to mysql 'LIKE' query
  let regex = new RegExp(String.raw`${name}`);
  return cocktails.find({Name: regex})
    .then(res => res)
    .catch(err => err);
};

const queryDrinkByIngredients = (ingredients) => {
  let items = ingredients.split(',');
  let query = 'SELECT jsonb_strip_nulls(to_jsonb(recipes)) FROM recipes WHERE ';

  for (let i = 1; i <= 14; i++) {
    let string = '';
    string += `(LOWER(stringredient${i}) LIKE LOWER('%${items[0]}%') OR `;
    for (let j = 1; j < items.length; j++) {
      string += `LOWER(stringredient${i}) LIKE LOWER('%${items[j]}%') OR `;
    }
    string += `LOWER(stringredient${i}) LIKE LOWER('%${items[items.length - 1]}%')) OR `;
    query += string;
  }
  query = query.slice(0, -3);
  return pool.query(`${query};`)
    .then(res => res.rows)
    .catch(err => err);
};

module.exports = {
  queryDrinkByName,
  queryRandomDrink,
  queryDrinkByIngredients
};