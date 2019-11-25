
function lastIndexOf(object, list) {
  return list.reduce((lastIdx, current, currentIdx) => {
    if (current === object) {
      return currentIdx;
    }
    return lastIdx;
  }, -1);
}


export {
  lastIndexOf,
};
