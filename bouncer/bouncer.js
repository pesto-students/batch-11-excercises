
function bouncer(randomArray) {
  const listOfTruthyValues = randomArray.filter(Boolean);
  return listOfTruthyValues;
}

export {
  bouncer,
};
