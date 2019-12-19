
function uncurryN() {
  return null;
  // const range = Array.from({ length: argsCount }, (v, i) => `item${i}`);

  // return (...range, ...args) => {
  //   return args.reduce((acc, arg) => acc(arg), curriedFunction);
  // };
  //   const lengthOfArgs = argsCount;
  //   let i = 0;
  //   let fn = curriedFunction;
  //   while (i < lengthOfArgs - 1) {
  //     fn = fn(args[i]);
  //     i++;
  //   }
  //   return fn(args[args.length - 1]);
  // };
  // return returningFn;
}

export {
  uncurryN,
};
