function endsWith(source, compare) {
  let count = source.length - 1;
  let status = true;
  for (let i = compare.length - 1; i >= 0; i -= 1) {
    if (compare[i] !== source[count]) {
      status = false;
    } else {
      count -= 1;
    }
  }
  return status;
}

function doesEndWith(compare, source) {
  if (!Array.isArray(source)) {
    return endsWith(source.split(""), compare.split(""));
  }
  return endsWith(source, compare);
}

export { doesEndWith };
