function abbreviateString(fullNameString) {
  const splittedString = fullNameString.split(" ");
  const [firstName] = [...splittedString];
  const lastName = splittedString[splittedString.length - 1][0];

  return firstName
    .concat(" ")
    .concat(lastName.toUpperCase())
    .concat(".");
}

export { abbreviateString };
