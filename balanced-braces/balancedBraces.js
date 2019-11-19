function balancedBraces(string) {
  const brackets = [];
  const endBrackets = [];
  const openingBrackets = ["[", "{", "("];
  const closingBrackets = ["]", "}", ")"];

  for (let i = 0; i < string.length; i += 1) {
    if (openingBrackets.includes(string[i])) {
      brackets.push(string[i]);
    }
    if (closingBrackets.includes(string[i])) {
      endBrackets.push(string[i]);
    }
    if (
      closingBrackets.includes(string[i]) &&
      closingBrackets.indexOf(endBrackets[0]) ===
        openingBrackets.indexOf(brackets[brackets.length - 1])
    ) {
      brackets.pop();
      endBrackets.shift();
    }
  }
  if (brackets.length === 0 && endBrackets.length === 0) {
    return true;
  }
  return false;
}

export { balancedBraces };
