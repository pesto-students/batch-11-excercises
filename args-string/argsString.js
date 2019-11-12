const argsString = (string, array) => {
  let original = string;
  let replaced;
  for (let i = 0; i < array.length; i += 1) {
    replaced = original.replace(/{}/, array[i]);
    original = replaced;
  }

  return replaced;
};

export { argsString };
