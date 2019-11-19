const doesEndWith = (value1, value2) => {
  let subString = value1;
  let string = value2;
  if (Array.isArray(value1) && Array.isArray(value2)) {
    subString = value1.join('');
    string = value2.join('');
  }
  if (subString.length > string.length) {
    return false;
  }

  const endsOfString = string.slice(string.length - subString.length);
  if (endsOfString === subString) {
    return true;
  }
  return false;
};

export { doesEndWith };
