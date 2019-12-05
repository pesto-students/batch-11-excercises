
function counter(...args) {
  var flag = 0;
  function counter() {
    return ++flag;
  }
  return counter;
}

export {
  counter,
};
