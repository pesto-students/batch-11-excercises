
function bouncer(actualArray) {
  let trueArray = [];
  
  actualArray.forEach(arrayElement => {
    if(arrayElement){
      trueArray.push(arrayElement);
    }
  });

  return trueArray;
}

export {
  bouncer,
};
