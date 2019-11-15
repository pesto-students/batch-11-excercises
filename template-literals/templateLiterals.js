
function templateLiterals(numberOfPlayers, players) {
  if (numberOfPlayers === undefined || players.length === 0) {
    return 'No players available in current team!';
  }
  else {
    return `There are ${numberOfPlayers} people on the football team. Their names are ${players.join(', ')}.`;
  }
}

export {
  templateLiterals,
};
