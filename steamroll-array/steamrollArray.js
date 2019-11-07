
function steamrollArray(nestedArray) {
  var flattenedArray = [];

  nestedArray.forEach(innerElement => {
    if(innerElement instanceof Array){
      flattenedArray =  flattenedArray.concat(steamrollArray(innerElement));
    }
    else {
    flattenedArray.push(innerElement)
    }
  });

  return flattenedArray;
}

export {
  steamrollArray,
};
