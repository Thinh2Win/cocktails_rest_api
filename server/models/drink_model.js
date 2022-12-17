const { db } = require('../db/db.js');

const cocktailSchema = new db.Schema({
  Name: String,
  Ingredients: String,
  Garnish: String,
  Preparation: String
});

const cocktails = db.model('cocktails', cocktailSchema);

module.exports = cocktails;