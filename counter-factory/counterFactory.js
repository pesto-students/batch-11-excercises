
function counterFactory(...args) {
  var flag = 0;
  function increment() {
    return ++flag;
  }
  function decrement() {
    return --flag;
  }
  return {
    increment: increment,
    decrement: decrement
  };
}

export {
  counterFactory,
};
