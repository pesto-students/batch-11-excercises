
function arrayAddition(firstArray, secondArray) {
  if (firstArray.length === 0 || secondArray.length === 0) {
    throw new Error('Arrays cannot be empty!');
  }
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new Error('Inputs can only be arrays!');
  }
  if (!isNumeric(firstArray) || !isNumeric(secondArray)) {
    throw new Error('Arrays can only contain numbers!');
  }

  let addedArray = [];
  if (firstArray.length < secondArray.length) {
    let addedArray = addOneByOne(firstArray, secondArray);
    let remainingArray = secondArray.slice(firstArray.length);
    return addedArray.concat(remainingArray);
  } else {
    return addOneByOne(firstArray, secondArray);
  }
}

const addOneByOne = (firstArray, secondArray) => {
  let addedArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    addedArray.push(firstArray[i] + secondArray[i]);
  }
  return addedArray;
}
const isNumeric = (array) => array.every((element) => typeof element === 'number');

export {
  arrayAddition,
};
