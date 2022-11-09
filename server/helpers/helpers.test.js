const { pascalCase, createExpressions } = require('./helpers.js');

// pascalCase function should turn a string of one or more words into pascalCase regardless of case

test('turns all lowercase string to pascal case', () => {
  expect(pascalCase('jon snow')).toBe('Jon Snow');
});

test('turns all uppercase string to pascal case', () => {
  expect(pascalCase('HELLO WORLD IT IS I')).toBe('Hello World It Is I');
});

test('turns a mixed case string to pascal case', () => {
  expect(pascalCase('ooOoOoO TesTiNg')).toBe('Ooooooo Testing');
});

test('turns a single word  to pascal case', () => {
  expect(pascalCase('drinks')).toBe('Drinks');
});

test('turns a mixed case word to pascal case', () => {
  expect(pascalCase('DrInKs')).toBe('Drinks');
});

// createExpressions function should turn a string of items into an array containing regex expressions for each item to be used for mongoose find query

test('turns array of items into PascalCase regex expressions', () => {
  let items = ['Gin', 'Tequila', 'Vodka'];
  let data = createExpressions('Ingredients', 'gin,tequila,vodka');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].Ingredients).toEqual(new RegExp(String.raw`${items[i]}`));
  }
});

test('no ingredients but large string of spaces', () => {
  let data = createExpressions('Ingredients', '        ');
  expect(data).toEqual([]);
});

test('no ingredients', () => {
  let data = createExpressions('Ingredients', '');
  expect(data).toEqual([]);
});

test('turns mixed case items into PascalCase regex expressions', () => {
  let items = ['Gin', 'Tequila', 'Vodka'];
  let data = createExpressions('Ingredients', 'gIN,teQuILa,vODkA');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].Ingredients).toEqual(new RegExp(String.raw`${items[i]}`));
  }
});
