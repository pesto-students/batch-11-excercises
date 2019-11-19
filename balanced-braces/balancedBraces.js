const balancedBraces = (string) => {
  const openingBraces = ['{', '[', '('];
  const closingBraces = ['}', ']', ')'];
  const openingBracesStack = [];
  const closingBracesQueue = [];

  for (let i = 0; i < string.length; i += 1) {
    if (openingBraces.includes(string[i])) {
      openingBracesStack.push(string[i]);
    }
    if (closingBraces.includes(string[i])) {
      closingBracesQueue.push(string[i]);
    }
    if (
      closingBraces.includes(string[i]) &&
      closingBraces.indexOf(closingBracesQueue[0]) ===
        openingBraces.indexOf(openingBracesStack[openingBracesStack.length - 1])
    ) {
      openingBracesStack.pop();
      closingBracesQueue.shift();
    }
  }
  if (openingBracesStack.length === 0 && closingBracesQueue.length === 0) {
    return true;
  }
  return false;
};

export { balancedBraces };
