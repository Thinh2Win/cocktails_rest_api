const db = require('mongoose');
const { createClient } = require('redis');

const cache = createClient({url: 'redis://host.docker.internal:6380'});

cache.connect()
  .catch(err => console.log(err));

db.connect('mongodb://host.docker.internal:27018/drinks')
  .catch(err => console.log(err));

module.exports = {
  db,
  cache
};
