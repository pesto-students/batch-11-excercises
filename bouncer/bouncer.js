
function bouncer(toBeTruthifyArray) {
  if (!toBeTruthifyArray) return [];
  return toBeTruthifyArray.filter((toBeTruthifyValue) => toBeTruthifyValue);
}

export {
  bouncer,
};
