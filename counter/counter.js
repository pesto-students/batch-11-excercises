
function counter(...args) {
  
  var i = 0;

  return () => {return ++i};
}

export {
  counter,
};
