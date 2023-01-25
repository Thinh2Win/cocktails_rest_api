const { queryRandomDrink, queryDrinkByName, queryDrinkByIngredients, queryDrinkExcludingIngredients } = require('../services/drink_service.js');
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
    expect(keys).toContain('name');
    expect(keys).toContain('ingredients');
    expect(keys).toContain('preparation');
    expect(keys).toContain('glass');
    expect(keys).toContain('strength');
    expect(keys).toContain('description');
    expect(keys).toContain('img');
    expect(keys).toContain('profile');
  });

// tests for drink by name query
test('should return drinks with royal in name', async () => {
  let data = await queryDrinkByName('royal');
  data.forEach(drink => {
    expect(drink.name).toContain('royal');
  });
});

test('should return drinks with negroni in name', async () => {
  let data = await queryDrinkByName('negroni');
  data.forEach(drink => {
    expect(drink.name).toContain('negroni');
  });
});

test('should return drinks with red in name', async () => {
  let data = await queryDrinkByName('red');
  data.forEach(drink => {
    expect(drink.name).toContain('red');
  });
});

test('should return drinks with beach in name', async () => {
  let data = await queryDrinkByName('beach');
  data.forEach(drink => {
    expect(drink.name).toContain('beach');
  });
});

test('should return drinks with coco in name', async () => {
  let data = await queryDrinkByName('coco');
  data.forEach(drink => {
    expect(drink.name).toContain('coco');
  });
});

//tests for querying drink from ingredients

test('should return drinks containing lime', async () => {
  let data = await queryDrinkByIngredients('lime');
  data.forEach(drink => {
    expect(drink.ingredients).toContain('lime');
  });
});

test('should return drinks containing lime, ginger, and rum', async () => {
  let data = await queryDrinkByIngredients('lime, ginger, rum');
  data.forEach(drink => {
    expect(drink.ingredients).toContain('lime');
    expect(drink.ingredients).toContain('ginger');
    expect(drink.ingredients).toContain('rum');
  });
});

test('should return drinks containing lemon, rum, pineapple, orange', async () => {
  let data = await queryDrinkByIngredients('lemon, rum, pineapple, orange');
  data.forEach(drink => {
    expect(drink.ingredients).toContain('lemon');
    expect(drink.ingredients).toContain('pineapple');
    expect(drink.ingredients).toContain('rum');
    expect(drink.ingredients).toContain('orange');
  });
});

test('should return drinks containing campari, gin, sweet vermouth', async () => {
  let data = await queryDrinkByIngredients('campari, gin, sweet vermouth');
  data.forEach(drink => {
    expect(drink.ingredients).toContain('campari');
    expect(drink.ingredients).toContain('gin');
    expect(drink.ingredients).toContain('sweet vermouth');
  });
});

// tests for querying drinks excluding listed ingredients

test('should return drinks without tequila', async () => {
  let data = await queryDrinkExcludingIngredients('tequila');
  data.forEach(drink => {
    expect(drink.ingredients).not.toContain('tequila');
  });
});

test('should return drinks without egg whites and syrup', async () => {
  let data = await queryDrinkExcludingIngredients('egg whites, syrup');
  data.forEach(drink => {
    expect(drink.ingredients).not.toContain('egg whites');
    expect(drink.ingredients).not.toContain('syrup');
  });
});

test('should return drinks without gin, lime, whiskey, lemon, pineapple', async () => {
  let data = await queryDrinkExcludingIngredients('gin, lime, whiskey, lemon, pineapple');
  data.forEach(drink => {
    expect(drink.ingredients).not.toContain('gin');
    expect(drink.ingredients).not.toContain('lime');
    expect(drink.ingredients).not.toContain('whiskey');
    expect(drink.ingredients).not.toContain('lemon');
    expect(drink.ingredients).not.toContain('pineapple');
  });
});

test('should return drinks without orange, bitters, rum', async () => {
  let data = await queryDrinkExcludingIngredients('orange, bitters, rum');
  data.forEach(drink => {
    expect(drink.ingredients).not.toContain('orange');
    expect(drink.ingredients).not.toContain('bitters');
    expect(drink.ingredients).not.toContain('rum');
  });
});

test('should return drinks without campari, bitter, vermouth, apple', async () => {
  let data = await queryDrinkExcludingIngredients('campari, bitter, vermouth, apple');
  data.forEach(drink => {
    expect(drink.ingredients).not.toContain('campari');
    expect(drink.ingredients).not.toContain('bitters');
    expect(drink.ingredients).not.toContain('vermouth');
    expect(drink.ingredients).not.toContain('apple');
  });
});

