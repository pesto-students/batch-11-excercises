function orbitalPeriod(array) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  array.forEach((item) => {
    const getOrbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    delete item.avgAlt;
    item.orbitalPeriod = getOrbitalPeriod;
  });
  return array;
}

export { orbitalPeriod };
