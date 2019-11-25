
function updateObject(index,element,object) {
  return (function (value) {
    return (function (array) {
      const newArray = [...array];
      const arrLen = newArray.length;

      if(index > arrLen - 1 || Math.abs(index) > arrLen - 1) {
        return object;
      }
  
      if(index < 0){
        index += arrLen;
      };

      newArray[index] = value;
      return newArray;
    });
  }(element))(object);
}

export {
  updateObject,
};