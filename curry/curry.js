
function curry(actualFunction) {
  
  function curriedFunction(...args){
    if (args.length >= actualFunction.length){
      return actualFunction.apply(this,args);
    } else {
      return function (...lessArgs) { // (2)
        return curriedFunction.apply(this, args.concat(lessArgs));
      }
    }
  }
  
  return curriedFunction;
}

export {
  curry,
};
