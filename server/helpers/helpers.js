const pascalCase = (string) => {
  return string.split(' ').map(word => {
    return word.toLowerCase().replace(word[0].toLowerCase(), word[0].toUpperCase());
  }).join(' ');
};

const createExpressions = (key, ingredients) => {
  let expressions = [];
  // check for empty ingredients
  if (ingredients.split(' ').join('').length < 1) {
    return expressions;
  }
  let items = pascalCase(ingredients.split(',').join(' ')).split(' ');
  items.forEach(item => {
    let regex = new RegExp(String.raw`${item}`);
    expressions.push({[key]: regex});
  });
  return expressions;
};

module.exports = {
  pascalCase,
  createExpressions
};