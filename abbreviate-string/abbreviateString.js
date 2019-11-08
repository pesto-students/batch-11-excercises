
function abbreviateString(fullString) {
  
  if (typeof fullString !== 'string') {
    throw new Error('Input parameter should be a string')
  }
  var abbreviatedString = "";
  var fullStringArray = fullString.split(" ");
  var firstString = fullStringArray[0];
  var lastString = fullStringArray[fullStringArray.length - 1];

  abbreviatedString = firstString + " " + lastString.charAt(0).toUpperCase() + ".";

  return abbreviatedString;
}

export {
  abbreviateString,
};
