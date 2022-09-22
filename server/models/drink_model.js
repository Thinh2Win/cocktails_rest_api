const { pool } = require('../db/db.js');

const queryRandomDrink = () => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE drink_id = ${Math.floor(Math.random() * 545)};`)
    .then(res => res.rows)
    .catch(res => err);
};

const queryDrinkByName = (name) => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE LOWER(strdrink) LIKE LOWER('%${name}%');`)
    .then(res => res.rows)
    .catch(err => err);
};

const queryDrinkByIngredients = (ingredients) => {
  let items = ingredients.split(',');
  let query =  `SELECT jsonb_strip_nulls(to_jsonb(recipes)) FROM recipes WHERE `;

  for (let i = 1; i <= items.length; i++) {
    let string = ``;
    string += `(LOWER(stringredient${i}) LIKE LOWER('%${items[0]}%') OR `;
    for (let j = 1; j < items.length; j++) {
      string += `LOWER(stringredient${i}) LIKE LOWER('%${items[j]}%') OR `;
    }
    string += `LOWER(stringredient${i}) LIKE LOWER('%${items[items.length - 1]}%')) AND `;
    query += string;
  }
  query = query.slice(0, -5);
  return pool.query(`${query};`)
    .then(res => res.rows)
    .catch(err => err);
};

module.exports = {
  queryDrinkByName,
  queryRandomDrink,
  queryDrinkByIngredients
};