function titleize(string) {
  let capitalized = "";
  const splitString = string.split("");
  const specialChars = [" ", "/", "\", "-",];
  splitString.forEach((letter, index) => {
    if (specialChars.includes(letter))
  });
  return capitalized;
}

export { titleize };
