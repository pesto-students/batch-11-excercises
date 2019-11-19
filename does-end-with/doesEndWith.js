
function doesEndWith(subList, list) {
  let array = [];
  let subArray = [];
  if (list instanceof Array && subList instanceof Array) {
    array = list;
    subArray = subList;
  } else if (typeof list === 'string' && typeof subList === 'string') {
    array = list.split('');
    subArray = subList.split('');
  } else {
    throw Error('Input must be string or an array');
  }

  array.reverse();
  subArray.reverse();
  return subArray
    .reduce((accumulator, item, index) => accumulator && (item === array[index]), true);
}

export {
  doesEndWith,
};
