function curry(randomFunction) {
  return function(firstParameter) {
    return function(secondParameter) {
      return firstParameter + secondParameter;
    };
  };
}

export { curry };
