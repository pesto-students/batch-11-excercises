
function orbitalPeriod(objects) {
  const Radius = 6367.4447;
  const GM = 398600.4418;
  const transformedArray = objects.map((object) => {
    const velocity = (GM / (Radius + object.avgAlt)) ** 0.5;
    const period = (2 * Math.PI * (Radius + object.avgAlt)) / velocity;
    return {
      name: object.name,
      orbitalPeriod: Math.round(period),
    };
  });
  return transformedArray;
}

export {
  orbitalPeriod,
};
