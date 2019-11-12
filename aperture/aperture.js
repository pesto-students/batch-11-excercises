
function aperture(sizeOfSubArray, array) {
  if (sizeOfSubArray > array.length) {
    return [];
  } else {
    let subArrays = [];
    for (let i = 0; i < array.length; i++) {
      if (i + sizeOfSubArray <= array.length) {
        let subArray = array.slice(i, i + sizeOfSubArray);
        subArrays.push(subArray);
      }
    }
    return subArrays;
  }
}

export {
  aperture,
};
