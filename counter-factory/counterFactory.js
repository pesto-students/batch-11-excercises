
function counterFactory() {
  let count=0;
  const counter = {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    }
  }
  return counter;
}

export {
  counterFactory,
};
