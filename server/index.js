const express = require('express');
const app = express();
const { getData } = require('./db.js');
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

getData().then(data => console.log(data));

app.listen(() => {
  console.log(`server listening on port ${process.env.PORT}`);
});
