const PI = 22 / 7;
const GM = 398600.4418;
const earthRadius = 6367.4447;

function orbitalPeriodFromAvgAltitude(averageAltitude) {
  return parseInt((2 * PI * Math.sqrt(((averageAltitude + earthRadius) ** 3) / GM)), 10);
}

function calculateAddOrbitalPeriod(averageAltitudeDatum) {
  averageAltitudeDatum.orbitalPeriod = orbitalPeriodFromAvgAltitude(averageAltitudeDatum.avgAlt);
  delete averageAltitudeDatum.avgAlt;
  return averageAltitudeDatum;
}

function orbitalPeriod(averageAltitudeData) {
  const averageOrbitalPeriodData = averageAltitudeData.map(
    (averageAltitudeDatum) => (
      calculateAddOrbitalPeriod(averageAltitudeDatum)
    )
  );
  return averageOrbitalPeriodData;
}

export {
  orbitalPeriod,
};
