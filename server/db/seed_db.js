const { pool } = require('./db.js');
require('dotenv').config();

const drinksQuery = `CREATE TABLE recipes(
  drink_id SERIAL PRIMARY KEY,
  strDrink TEXT,
  strAlcoholic TEXT,
  strCategory TEXT,
  strDrinkThumb TEXT,
  strGlass TEXT,
  strIBA TEXT,
  strIngredient1 TEXT,
  strIngredient10 TEXT,
  strIngredient11 TEXT,
  strIngredient12 TEXT,
  strIngredient13 TEXT,
  strIngredient14 TEXT,
  strIngredient15 TEXT,
  strIngredient2 TEXT,
  strIngredient3 TEXT,
  strIngredient4 TEXT,
  strIngredient5 TEXT,
  strIngredient6 TEXT,
  strIngredient7 TEXT,
  strIngredient8 TEXT,
  strIngredient9 TEXT,
  strInstructions TEXT,
  strMeasure1 TEXT,
  strMeasure10 TEXT,
  strMeasure11 TEXT,
  strMeasure12 TEXT,
  strMeasure13 TEXT,
  strMeasure14 TEXT,
  strMeasure15 TEXT,
  strMeasure2 TEXT,
  strMeasure3 TEXT,
  strMeasure4 TEXT,
  strMeasure5 TEXT,
  strMeasure6 TEXT,
  strMeasure7 TEXT,
  strMeasure8 TEXT,
  strMeasure9 TEXT,
  strVideo TEXT
);`;

const seedDrinks = () => {
  pool.query(`COPY recipes FROM '${process.env.DATA_FILE_PATH}' DELIMITER ',' CSV HEADER`)
    .then( _ => console.log('db seeded'))
    .catch(err => console.log(err));
};

const seedDb = () => {
  pool.query(drinksQuery)
    .then( _ => console.log('recipes table created'))
    .then( _ => seedDrinks())
    .catch(err => console.log(err));
};

module.exports = {seedDb};