const express = require('express');
const app = express();
const { getDrinkById, getRandomDrink } = require('./controllers/drink_controllers');
require('dotenv').config();

app.get('/', (req, res) => {
  getRandomDrink()
    .then(data => res.send(data[0].jsonb_strip_nulls))
    .catch(err => res.send(err));
});


app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
