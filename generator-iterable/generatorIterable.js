
function* generatorIterable() {
  let number = 1;
  while (number <= 5) {
    yield number;
    number += 1;
  }
}

export {
  generatorIterable,
};
