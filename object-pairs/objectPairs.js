function objectPairs(object) {
  let pairsCollector = [];
  for (let key in object) {
    let pair = [];
    pair.push(key, object[key]);
    pairsCollector.push(pair);
  }
  return pairsCollector;
}

export { objectPairs };
