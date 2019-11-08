
function curry(randomFunction) {
    return function(firstParameter) {
      return function(secondParameter) {
        return randomFunction(firstParameter,secondParameter);
      };
    };
  }

export {
  curry,
};
