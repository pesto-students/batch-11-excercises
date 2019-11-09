
function reverseString(...args) {
  const simpleString = args[0];
  let reversedString = '';
  for (let i = simpleString.length - 1; i >= 0; i--) {
    reversedString += simpleString[i];
  }
  return reversedString;
}

export {
  reverseString,
};
