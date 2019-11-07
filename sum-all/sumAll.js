
function sumAll(pairValueArray){

  let totalSum = 0;

  const [lowerBound,upperBound] = [...pairValueArray].sort((x,y) => {return x-y});

  for(let i = lowerBound; i <= upperBound;i++){
        totalSum += i;
  }

  return totalSum;
}


export {
  sumAll,
};
