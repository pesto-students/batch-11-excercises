
function cacheFunction(...args) {
  var func = (args[0]);
  if(args[0] == undefined){
    func = () => {};
  }
  
  return func;
}

export {
  cacheFunction,
};
