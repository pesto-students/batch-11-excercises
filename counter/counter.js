
function counter() {
  let count = 0;

  function counterIncrementFunction() {
    count += 1;
    return count;
  }
  return counterIncrementFunction;
}
export {
  counter,
};
