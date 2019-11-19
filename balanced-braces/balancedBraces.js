
function balancedBraces(expression) {
  const enclosures = [];
  let lastEnclosure = '';
  expression.split('').map((character) => {
    if (character === '(' || character === '{' || character === '[') {
      enclosures.push(character);
    }
    if (character === ')') {
      lastEnclosure = enclosures.pop();
      if (lastEnclosure !== '(') {
        enclosures.push(lastEnclosure);
        enclosures.push(character);
      }
    }
    if (character === '}') {
      lastEnclosure = enclosures.pop();
      if (lastEnclosure !== '{') {
        enclosures.push(lastEnclosure);
        enclosures.push(character);
      }
    }
    if (character === ']') {
      lastEnclosure = enclosures.pop();
      if (lastEnclosure !== '[') {
        enclosures.push(lastEnclosure);
        enclosures.push(character);
      }
    }
    return true;
  });
  if (enclosures.length === 0) {
    return true;
  }
  return false;
}

export {
  balancedBraces,
};
