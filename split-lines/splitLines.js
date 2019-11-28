const splitLines = (...args) => {
  const [string, preserveNewlines] = args;
  const regEx = /(\r\n)|(\r)|(\n)/g;
  const splitList = [];
  if (preserveNewlines) {
    let temp = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === `\n`) {
        splitList.push(string.slice(temp, i + 1));
        temp = i + 1;
      }
    }
    if (temp < string.length) {
      splitList.push(string.slice(temp));
    }

    if (string.endsWith('\n')) {
      splitList.push('');
    }
    return splitList;
  }

  return string.replace(regEx, '-').split('-');
};

export { splitLines };
