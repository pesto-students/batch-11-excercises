function abbreviateString(value) {
  const isString = typeof value === "string";

  if (!isString) {
    throw new Error("Expected String as an argument");
  }

  const splitString = value.trim().split(" ");
  const firstWord = splitString[0];

  if (splitString.length > 1) {
    const lastWord = splitString[splitString.length - 1];
    const abbreviatedLastWord = lastWord.toUpperCase().charAt(0);
    return firstWord + " " + abbreviatedLastWord + ".";
  }

  return firstWord;
}

export { abbreviateString };
