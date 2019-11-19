function doesEndWith(lastLetter, stringVal) {
  if (typeof lastLetter === "object" && typeof stringVal === "object") {
    const stringArray = stringVal.join("");
    const lastValues = lastLetter.join("");

    return stringArray.endsWith(lastValues);
  }
  return stringVal.endsWith(lastLetter);
}

export { doesEndWith };
