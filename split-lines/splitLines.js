function splitLines(string, predicate) {
  const CR = "\r";
  const NL = "\n";
  const letters = string.split("");
  if (predicate === undefined) {
    const splitByNewLine = letters.filter(letter => letter !== CR).join("");
    return splitByNewLine.split("\n");
  }
  const dividedList = [];
  let tempString = "";
  letters.forEach(letter => {
    if (letter === NL) {
      tempString += "\n";
      dividedList.push(tempString);
      tempString = "";
    } else {
      tempString += letter;
    }
  });
  if (tempString !== "") {
    dividedList.push(tempString);
  }
  if (string.endsWith(NL)) {
    dividedList.push("");
  }
  return dividedList;
}

export { splitLines };
