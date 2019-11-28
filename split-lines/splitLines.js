const splitLines = (...args) => {
  const [valueArray, newLine] = args;
  const charArray = [];
  if (newLine) {
    let temp = 0;
    for (let i = 0; i < valueArray.length; i += 1) {
      if (valueArray[i] === `\n`) {
        charArray.push(valueArray.slice(temp, i + 1));
        temp = i + 1;
      }
    }
    if (temp < valueArray.length) {
      charArray.push(valueArray.slice(temp));
    }

    if (valueArray.endsWith('\n')) {
      charArray.push('');
    }
    return charArray;
  }

  return valueArray.replace(/(\r\n)|(\n)/g, ',').split(',');
};

export { splitLines };