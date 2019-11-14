function summable({
  target,
  array,
}) {
  if (target === 0) {
    return true;
  }
  return recursivelySumForTarget(array, 0, 0, target);
}

function recursivelySumForTarget(array, index, sum, target) {
  if (index === array.length) {
    return false;
  }
  const currentEl = array[index];
  if (currentEl + sum === target) {
    return true;
  }
  if (currentEl + sum < target) {
    sum += currentEl;
    return recursivelySumForTarget(array, ++index, sum, target);
  }
  if (currentEl + sum > target) {
    return recursivelySumForTarget(array, ++index, sum, target);
  }
}

export {
  summable,
};
