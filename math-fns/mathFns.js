
function mathFns(){

  function sqrt(inputValue){ 
    return Math.sqrt(inputValue);
  };

  function power(inputValue,powerValue){ 
    return inputValue ** powerValue;
  }

  function round(inputValue){ 
    return Math.round(inputValue)
  }
  
}

export {
  mathFns,
};
