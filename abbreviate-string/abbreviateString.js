
function abbreviateString(fullNameString) {

  let splittedString = fullNameString.split(' ');
  let firstName = splittedString[0];
  let lastName = splittedString[splittedString.length - 1][0];

  return firstName.concat(' ').concat(lastName.toUpperCase()).concat('.');
}

export {
  abbreviateString,
};
