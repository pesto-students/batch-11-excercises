
function isTriangle(...args) {
  args.sort();
  if (Math.pow(args[2], 2) === (Math.pow(args[0], 2) + Math.pow(args[1], 2)))
    return true;
  return false;
}

export {
  isTriangle,
};
