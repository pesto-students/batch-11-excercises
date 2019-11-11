
function roundTo(value,decimals) { 
  return (Math.round(value+'e'+decimals)+'e-'+decimals);
}

export {
  roundTo,
};
