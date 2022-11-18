const pascalCase = (string) => {
  return string.split(' ').map(word => {
    return word.toLowerCase().replace(word[0].toLowerCase(), word[0].toUpperCase());
  }).join(' ');
};

const createExpressions = (method, ingredients) => {
  let expressions = [];
  // check for empty ingredients
  if (ingredients.split(' ').join('').length < 1) {
    return expressions;
  }
  ingredients.split(',').forEach(ingredient => {
    let regex = new RegExp(String.raw`${ingredient}`);
    method === 'search' && expressions.push({Ingredients: regex});
    method === 'filter' && expressions.push({Ingredients: {$not: regex}});
  });
  return expressions;
};

module.exports = {
  pascalCase,
  createExpressions,
};