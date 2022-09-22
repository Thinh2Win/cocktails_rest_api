const express = require('express');
const app = express();
const drinksRoutes = require('./routes/drink_routes.js');
require('dotenv').config();

app.use(drinksRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
