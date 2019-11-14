
function splitEvery(subListSize, list) {
  if (subListSize <= 0 && list.length === 0) {
    throw new Error('First Argument cannot be zero or negative')
  }
  const totalList = [...list];
  const subLists = [];
  while (totalList.length > 0) {
    let subList = totalList.splice(0, subListSize);
    if (isEveryElementString(subList)) {
      subLists.push(subList.join(''));
    } else {
      subLists.push(subList);
    }
  }
  return subLists;
}

const isEveryElementString = (array) => array.every((element) => typeof element === 'string');

export {
  splitEvery,
};
