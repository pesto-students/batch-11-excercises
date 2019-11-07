
function dropElements(numArray,shouldNotRemoveElement) {
  var filteredArray = [];

  numArray.forEach(element => {
    if(shouldNotRemoveElement(element)){
      filteredArray.push(element);
    }
  });
    
  return filteredArray;
}

export {
  dropElements,
};
