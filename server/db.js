const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT
});

const getData = () => {
  return pool.query(`SELECT * FROM users`)
    .then(res => res.rows)
    .catch(err => err);
};

module.exports = {getData};