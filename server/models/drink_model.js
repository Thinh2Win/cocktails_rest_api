const { pool } = require('../db/db.js');

const searchDrinkById = (drinkId) => {
  return pool.query(`
    SELECT jsonb_strip_nulls(to_jsonb(recipes))
    FROM recipes WHERE drink_id = ${drinkId};`)
    .then(res => res.rows)
    .catch(err => err);
};

module.exports = {
  searchDrinkById
};