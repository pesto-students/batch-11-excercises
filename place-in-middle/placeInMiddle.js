
function placeInMiddle(...numbers) {
  return [].concat(...numbers).sort((x, y) => x - y);
}

export {
  placeInMiddle,
};
