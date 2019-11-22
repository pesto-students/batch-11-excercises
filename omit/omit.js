
function omit(omitArray, object) {
  let newObject = {};
  for (const i in object){
    if(!omitArray.includes(i)) {
      newObject[i] = object[i];
    } 
  }

  return newObject;
}

export {
  omit,
};
