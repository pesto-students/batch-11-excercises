
function bouncer(...args) {
  const boolArray = args[0];
  const truthyArray = boolArray.filter((boolean) => {
    if (boolean) {
      return boolean;
    }
  });
  return truthyArray;
}

export {
  bouncer,
};
