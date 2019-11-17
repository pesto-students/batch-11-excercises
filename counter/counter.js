
function counter() {
  let numberToIncrease = 1;
  return function increaseNumber() {
    return numberToIncrease++;
  }
}

export {
  counter,
};
