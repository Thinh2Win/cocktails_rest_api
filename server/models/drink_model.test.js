const { queryRandomDrink, queryDrinkByName, queryDrinkByIngredients, queryDrinkExcludingIngredients } = require('./drink_model.js');
const { db } = require('../db/db.js');

beforeAll(done => done());
afterAll(done => {
  db.connection.close();
  done();
});

// random drink query
test('should return a drink', async () => {
    let data = await queryRandomDrink();
    let keys = Object.keys(data[0]);
    expect(keys).toContain('Name');
    expect(keys).toContain('Ingredients');
    expect(keys).toContain('Preparation');
    expect(keys).toContain('Garnish');
  });

// tests for drink by name query
test('should return drinks with royal in name', async () => {
  let data = await queryDrinkByName('royal');
  data.forEach(drink => {
    expect(drink.Name).toContain('royal');
  });
});

test('should return drinks with negroni in name', async () => {
  let data = await queryDrinkByName('negroni');
  data.forEach(drink => {
    expect(drink.Name).toContain('negroni');
  });
});

test('should return drinks with red in name', async () => {
  let data = await queryDrinkByName('red');
  data.forEach(drink => {
    expect(drink.Name).toContain('red');
  });
});

test('should return drinks with beach in name', async () => {
  let data = await queryDrinkByName('beach');
  data.forEach(drink => {
    expect(drink.Name).toContain('beach');
  });
});

test('should return drinks with coco in name', async () => {
  let data = await queryDrinkByName('coco');
  data.forEach(drink => {
    expect(drink.Name).toContain('coco');
  });
});

//tests for querying drink from ingredients

test('should return drinks containing lime', async () => {
  let data = await queryDrinkByIngredients('lime');
  data.forEach(drink => {
    expect(drink.Ingredients).toContain('lime');
  });
});

test('should return drinks containing lime, ginger, and rum', async () => {
  let data = await queryDrinkByIngredients('lime, ginger, rum');
  data.forEach(drink => {
    expect(drink.Ingredients).toContain('lime');
    expect(drink.Ingredients).toContain('ginger');
    expect(drink.Ingredients).toContain('rum');
  });
});

test('should return drinks containing lemon, rum, pineapple, orange', async () => {
  let data = await queryDrinkByIngredients('lemon, rum, pineapple, orange');
  data.forEach(drink => {
    expect(drink.Ingredients).toContain('lemon');
    expect(drink.Ingredients).toContain('pineapple');
    expect(drink.Ingredients).toContain('rum');
    expect(drink.Ingredients).toContain('orange');
  });
});

test('should return drinks containing campari, gin, sweet vermouth', async () => {
  let data = await queryDrinkByIngredients('campari, gin, sweet vermouth');
  data.forEach(drink => {
    expect(drink.Ingredients).toContain('campari');
    expect(drink.Ingredients).toContain('gin');
    expect(drink.Ingredients).toContain('sweet vermouth');
  });
});

// tests for querying drinks excluding listed ingredients

test('should return drinks without tequila', async () => {
  let data = await queryDrinkExcludingIngredients('tequila');
  data.forEach(drink => {
    expect(drink.Ingredients).not.toContain('tequila');
  });
});

test('should return drinks without egg whites and syrup', async () => {
  let data = await queryDrinkExcludingIngredients('egg whites, syrup');
  data.forEach(drink => {
    expect(drink.Ingredients).not.toContain('egg whites');
    expect(drink.Ingredients).not.toContain('syrup');
  });
});

test('should return drinks without gin, lime, whiskey, lemon, pineapple', async () => {
  let data = await queryDrinkExcludingIngredients('gin, lime, whiskey, lemon, pineapple');
  data.forEach(drink => {
    expect(drink.Ingredients).not.toContain('gin');
    expect(drink.Ingredients).not.toContain('lime');
    expect(drink.Ingredients).not.toContain('whiskey');
    expect(drink.Ingredients).not.toContain('lemon');
    expect(drink.Ingredients).not.toContain('pineapple');
  });
});

test('should return drinks without orange, bitters, rum', async () => {
  let data = await queryDrinkExcludingIngredients('orange, bitters, rum');
  data.forEach(drink => {
    expect(drink.Ingredients).not.toContain('orange');
    expect(drink.Ingredients).not.toContain('bitters');
    expect(drink.Ingredients).not.toContain('rum');
  });
});

test('should return drinks without campari, bitter, vermouth, apple', async () => {
  let data = await queryDrinkExcludingIngredients('campari, bitter, vermouth, apple');
  data.forEach(drink => {
    expect(drink.Ingredients).not.toContain('campari');
    expect(drink.Ingredients).not.toContain('bitters');
    expect(drink.Ingredients).not.toContain('vermouth');
    expect(drink.Ingredients).not.toContain('apple');
  });
});

