const { db } = require('../db/db.js');

const cocktailSchema = new db.Schema({
  name: String,
  ingredients: String,
  preparation: String,
  glass: String,
  strength: String,
  description: String,
  img: String,
  profile: String
});

const cocktails = db.model('cocktails', cocktailSchema);

module.exports = cocktails;