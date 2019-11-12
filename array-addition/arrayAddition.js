
function arrayAddition(numbers1, numbers2) {
  const isNumbers1Array = numbers1 instanceof Array;
  const isNumbers2Array = numbers2 instanceof Array;

  if (!isNumbers1Array || !isNumbers2Array) {
    throw Error('Both the number should be array');
  }

  const isNumbers1ArrayEmpty = numbers1.length === 0;
  const isNumbers2ArrayEmpty = numbers2.length === 0;

  if (isNumbers1ArrayEmpty || isNumbers2ArrayEmpty) {
    throw Error('Both the arrays should have at-least one character');
  }

  const smallerArray = numbers1.length > numbers2.length ? numbers2 : numbers1;
  const largerArray = numbers1.length > numbers2.length ? numbers1 : numbers2;

  const concatArray = smallerArray.map((number, index) => {
    const isNumber1Valid = typeof largerArray[index] === 'number';
    const isNumber2Valid = typeof number === 'number';
    if (!isNumber1Valid || !isNumber2Valid) {
      throw Error('All the items in array should be numbers');
    }
    return largerArray[index] + number;
  });

  const remainingArray = largerArray.slice(smallerArray.length);
  return [...concatArray, ...remainingArray];
}

export {
  arrayAddition,
};
