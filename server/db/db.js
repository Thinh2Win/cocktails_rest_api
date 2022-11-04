const db = require('mongoose');
require('dotenv').config();

const cocktailSchema = new db.Schema({
  Name: String,
  Ingredients: String,
  Garnish: String,
  Preparation: String
});

db.connect(process.env.DB_URL)
  .catch(err => console.log(err));

const cocktails = db.model('cocktail', cocktailSchema);

module.exports = {
  cocktails
};