function repeatStringNumTimes(StringValue, repeatationTimes) {
  if (repeatationTimes < 0) {
    return "";
  }
  const repetitiveStringArray = new Array(repeatationTimes)
    .fill(StringValue)
    .join("");

  return repetitiveStringArray;
}

export { repeatStringNumTimes };
