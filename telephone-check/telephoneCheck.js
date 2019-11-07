
function telephoneCheck(...args) {
  const telephoneNum = args[0];
  const areaCodePattern = /\(\d{3}\)/gi;
  const specialCharPattern = /[*?&#!a-zA-Z]/gi;
  const countryCodePattern = /\d /gi;
  if (!areaCodePattern.test(telephoneNum)) {
    return false;
  } else if (specialCharPattern.test(telephoneNum)) {
    return false;
  } else if (countryCodePattern.test(telephoneNum)) {
    if (telephoneNum[0] !== '1') return false;
  }
  return true;
}

export {
  telephoneCheck,
};
