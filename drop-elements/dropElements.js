
function dropElements(numArray,shouldRemoveElement) {
  var filteredArray = [];
  
  numArray.forEach(element => {
    if(shouldRemoveElement(element)){
      filteredArray.push(element);
    }
  });
    
  return filteredArray;
}

export {
  dropElements,
};
