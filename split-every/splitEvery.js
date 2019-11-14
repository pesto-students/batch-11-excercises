
function splitEvery(sliceLength, collection) {
  const resultArray = [];
  if (sliceLength < 1) {
    throw new Error('Slice length should be a positive number');
  }
  collection.reduce((acc, currentValue, index, actualArray) => {
    acc.push(collection.splice(0, sliceLength));

    console.log(collection);
    //actualArray = actualArray.slice(sliceLength, actualArray.length);
    return resultArray;
  }, resultArray);

  return resultArray;
}

export {
  splitEvery,
};
