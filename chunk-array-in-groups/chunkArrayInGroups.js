
function chunkArrayInGroups(completeArray,chunkSize) {

  let chunkGroupArray = [];

  while(completeArray.length !== 0){
    chunkGroupArray.push(completeArray.splice(0,chunkSize));
  }

  return chunkGroupArray;

}

export {
  chunkArrayInGroups,
};
