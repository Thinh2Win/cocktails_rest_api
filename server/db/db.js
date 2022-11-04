const db = require('mongoose');

db.connect('mongodb://localhost:27017/drink_recipes')
  .then(res => {
    console.log('connected to mongodb');
    const cocktailSchema = new db.Schema({
      Name: String,
      Ingredients: String,
      Garnish: String,
      Preparation: String
    });
    const cocktails = db.model('cocktail', cocktailSchema);
    cocktails.findOne({Name: 'Cut & Rum'})
      .then(data => console.log(data));
  })
  .catch(err => console.log(err));
