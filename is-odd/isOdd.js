
function isOdd(...args) {
  var value = args[0];
  var divideby2 = parseInt(args[0]/2)
  if(divideby2 * 2 !== value){
    return true
  }else {
    return false
  }
}

export {
  isOdd,
};
