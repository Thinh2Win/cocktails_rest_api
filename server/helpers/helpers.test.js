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

test('no ingredients but large string of spaces', () => {
  let data = createExpressions('search', '        ');
  expect(data).toEqual([]);
});

test('no ingredients', () => {
  let data = createExpressions('search', '');
  expect(data).toEqual([]);
});

test('turns string of ingredients into regex expressions', () => {
  let items = ['gin', 'tequila', 'vodka'];
  let data = createExpressions('search', 'GiN,TeQuILa,vODkA');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual(new RegExp(String.raw`${items[i]}`));
  }
});

test('turns multi word ingredients into regex expressions', () => {
  let items = ['blue curacao', 'triple sec'];
  let data = createExpressions('search', 'blue curacao,triple sec');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual(new RegExp(String.raw`${items[i]}`));
  }
});

test('turns ingredients with spacing into regex expressions', () => {
  let items = ['gin', 'tequila', 'rum', 'triple sec'];
  let data = createExpressions('search', 'gin, tequila, rum, triple sec');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual(new RegExp(String.raw`${items[i]}`));
  }
});

// for filter functionality

test('no ingredients but large string of spaces for filter', () => {
  let data = createExpressions('filter', '        ');
  expect(data).toEqual([]);
});

test('no ingredients for filter', () => {
  let data = createExpressions('filter', '');
  expect(data).toEqual([]);
});

test('turns string of ingredients into regex expressions w/ not', () => {
  let items = ['gin', 'tequila', 'vodka'];
  let data = createExpressions('filter', 'GiN,TeQuILa,vODkA');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual({$not: new RegExp(String.raw`${items[i]}`)});
  }
});

test('turns multi word ingredients into regex expressions w/ not', () => {
  let items = ['blue curacao', 'triple sec'];
  let data = createExpressions('filter', 'blue curacao,triple sec');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual({$not: new RegExp(String.raw`${items[i]}`)});
  }
});

test('turns ingredients with spacing into regex expressions w/ not', () => {
  let items = ['gin', 'tequila', 'rum', 'triple sec'];
  let data = createExpressions('filter', 'gin, tequila, rum, triple sec');
  for (let i = 0; i < items.length; i++) {
    expect(data[i].ingredients).toEqual({$not: new RegExp(String.raw`${items[i]}`)});
  }
});
