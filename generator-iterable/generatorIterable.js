
function *generatorIterable() {
  yield *generator();
}

function * generator(){
    let i = 0;
    while (i < 5) {
        i++;
      yield i;
    }
}

export {
  generatorIterable,
};
