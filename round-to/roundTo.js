
function roundTo(value,decimals) {
  const sign = value >= 0 ? 1 : -1;

  // return Number(Math.round(value+'e'+decimals * num_sign)+'e-'+decimals * num_sign);
  const roundedTo =  (Math.round((value*Math.pow(10,decimals))+(sign*0.0001))/Math.pow(10,decimals)).toFixed(decimals);
   return parseFloat(roundedTo);
}

export {
  roundTo,
};
