
function factorial(...args) {
  var result = 1;
  for(var i=1;i<=args[0];i++){
    result = result * i;
  }
  return result;
}

export {
  factorial,
};
