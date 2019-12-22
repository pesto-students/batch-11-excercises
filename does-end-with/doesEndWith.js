
function doesEndWith(item1, item2) {
  const str1 = Array.isArray(item1) ? item1.join('') : item1;
  const str2 = Array.isArray(item2) ? item2.join('') : item2;
  return str2.endsWith(str1);
}

export {
  doesEndWith,
};
