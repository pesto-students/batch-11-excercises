
function isEven(...args) {
  
  var value = args[0];
  if(value %2 === 0){
    return true
  }else {
    return false
  }
}

export {
  isEven,
};
