
function without(withouts, list) {
  const flatWithoutList = withouts.flat();
  const flatList = list.flat();
  const withoutList = item => flatWithoutList.every(number => !Object.is(number, item));
  return flatList.filter(withoutList);
}

export {
  without,
};
