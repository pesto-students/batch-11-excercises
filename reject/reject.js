
function reject(conditionValue, numbers) {
  const filterValue = numbers.filter((element) => !conditionValue(element));
  return filterValue;
}


export {
  reject,
};
