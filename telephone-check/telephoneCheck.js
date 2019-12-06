
function telephoneCheck(phoneNumber) {
  const validUSPhoneNumberPattern = /^(?:(?:\+?1\s*(?:[-]\s*)?)?(?:\(\s*([2-9][02-8][02-9])\s*\)|([2-9][02-8][02-9]))\s*(?:[-]\s*)?)?([2-9][02-9]{2})\s*(?:[-]\s*)?([0-9]{4})?$/gm;
  return phoneNumber.length >= 10 && validUSPhoneNumberPattern.test(phoneNumber);
}

export {
  telephoneCheck,
};
