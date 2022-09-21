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

const queryDrinkByIngredient = (ingredient) => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE
    stringredient1 LIKE '%${ingredient}%' OR
    stringredient2 LIKE '%${ingredient}%' OR
    stringredient3 LIKE '%${ingredient}%' OR
    stringredient4 LIKE '%${ingredient}%' OR
    stringredient5 LIKE '%${ingredient}%' OR
    stringredient6 LIKE '%${ingredient}%' OR
    stringredient7 LIKE '%${ingredient}%' OR
    stringredient8 LIKE '%${ingredient}%' OR
    stringredient9 LIKE '%${ingredient}%' OR
    stringredient10 LIKE '%${ingredient}%' OR
    stringredient11 LIKE '%${ingredient}%' OR
    stringredient12 LIKE '%${ingredient}%' OR
    stringredient13 LIKE '%${ingredient}%' OR
    stringredient14 LIKE '%${ingredient}%' OR
    stringredient15 LIKE '%${ingredient}%';
    `)
    .then(res => res.rows)
    .catch(err => err);
};

module.exports = {
  queryDrinkByName,
  queryRandomDrink,
  queryDrinkByIngredient
};