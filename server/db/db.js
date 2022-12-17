const db = require('mongoose');
const { createClient } = require('redis');

require('dotenv').config();

const cache = createClient({url: process.env.CACHE_URL});

cache.connect()
  .catch(err => console.log(err));

db.connect(process.env.DB_URL)
  .catch(err => console.log(err));

module.exports = {
  db,
  cache
};