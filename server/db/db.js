const db = require('mongoose');
const { createClient } = require('redis');

require('dotenv').config();

const cache = createClient({url: process.env.CACHE_URL});

cache.connect()
  .catch(err => console.log(err));

const cocktailSchema = new db.Schema({
  Name: String,
  Ingredients: String,
  Garnish: String,
  Preparation: String
});

db.connect(process.env.DB_URL)
  .catch(err => console.log(err));

const cocktails = db.model('cocktails', cocktailSchema);

module.exports = {
  cocktails,
  db,
  cache
};