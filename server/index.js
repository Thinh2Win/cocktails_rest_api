const express = require('express');
const helmet = require('helmet');

const app = express();
const drinksRoutes = require('./routes/drink_routes.js');

app.use(helmet());
app.use(express.json());
app.use(drinksRoutes);

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
