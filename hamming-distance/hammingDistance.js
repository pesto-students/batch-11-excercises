
function hammingDistance(string1,string2) {
  if(string1.length !== string2.length){
    throw new Error('Strings are of different length');
  }
  let count = 0;

  for(let i = 0; i <= string1.length; i += 1) {
    if(string1[i] !== string2[i]) {
      count += 1;
    }
  }
  return count;
}

export {
  hammingDistance,
};
