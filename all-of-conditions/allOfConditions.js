function allOfConditions(...callbacks) {
  return function evaluator(input) {
    for (let i = 0; i < callbacks.length; i += 1) {
      if (callbacks[i](input) === false) {
        break;
      }
    }
  };
}

export {
  allOfConditions,
};
