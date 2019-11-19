function shouldEndWith(source, toCompare) {
  let count = source.length - 1;
  let flag = true;
  for (let i = toCompare.length - 1; i >= 0; i -= 1) {
    if (toCompare[i] !== source[count]) {
      flag = false;
    } else {
      count -= 1;
    }
  }
  return flag;
}

function doesEndWith(toCompare, source) {
  if (!Array.isArray(source)) {
    return shouldEndWith(source.split(""), toCompare.split(""));
  }
  return shouldEndWith(source, toCompare);
}

export { doesEndWith };
