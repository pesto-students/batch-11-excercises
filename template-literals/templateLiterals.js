
function templateLiterals(num, ...people) {
  let nameString = 'There are 4 people on the football team. Their names are Rooney, Ronaldo, Messi, Pogba.';
  if (arguments.length > 0) {
    const getNames = (names, name, index) => {
      if (index === people.length - 1) {
        return `${names} ${name}.`;
      }
      return `${names} ${name},`;
    };
    const names = people.reduce(getNames, '');
    nameString = `There are ${num} people on the football team. Their names are${names}`;
  }
  return nameString;
}

export {
  templateLiterals,
};
