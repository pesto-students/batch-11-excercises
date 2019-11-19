function balancedBraces(stringValue) {
  const bracesArray = [...stringValue];

  const insertArray = ["{", "[", "("];
  const removeArray = ["}", "]", ")"];

  const bracketsArray = [];

  for (let i = 0; i < bracesArray.length; i += 1) {
    if (insertArray.includes(bracesArray[i])) {
      bracketsArray.push(bracesArray[i]);
    } else if (
      removeArray.indexOf(bracesArray[i]) ===
      insertArray.indexOf(bracketsArray[bracketsArray.length - 1])
    ) {
      bracketsArray.pop([bracketsArray.length - 1]);
    }
  }
  if (bracketsArray.length === 0) {
    return true;
  }
  return false;
}

export { balancedBraces };
