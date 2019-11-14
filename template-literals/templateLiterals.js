
function templateLiterals(number, players) {
  // const number = 4;
  // const players = ['Rooney', 'Ronaldo', 'Messi', 'Pogba'];
  const template = `There are ${number} people on the football team. Their names are ${players.join(', ')}.`;
  return template;
}

export {
  templateLiterals,
};
