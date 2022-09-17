const { pool } = require('../db/db.js');

const queryDrinkById = (drinkId) => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE drink_id = ${drinkId};`)
    .then(res => res.rows)
    .catch(err => err);
};

const queryRandomDrink = () => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE drink_id = ${Math.floor(Math.random() * 545)};`)
    .then(res => res.rows)
    .catch(res => err);
};

module.exports = {
  queryDrinkById,
  queryRandomDrink
};