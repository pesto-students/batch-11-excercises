
function isOdd(...args) {
  let flag = false;
  if (args % 2 !== 0) flag = true;
  return flag;
}

export {
  isOdd,
};
