
const makeNoun = (timeUnit, quantity) => (quantity > 1 ? `${timeUnit}s` : timeUnit);

const computeTimeDifference = (timeUnit, quantity) => {
  let finalUnit;
  switch (timeUnit) {
    case 'second':
      if (quantity >= 60) {
        const minutes = Math.trunc(quantity / 60);
        return computeTimeDifference('minute', minutes);
      }
      finalUnit = 'second';
      break;
    case 'minute':
      if (quantity >= 60) {
        const hours = Math.trunc(quantity / 60);
        return computeTimeDifference('hour', hours);
      }
      finalUnit = 'minute';
      break;
    case 'hour':
      if (quantity >= 24) {
        const days = Math.trunc(quantity / 24);
        return computeTimeDifference('day', days);
      }
      finalUnit = 'hour';
      break;
    case 'day':
      if (quantity >= 7 && quantity < 30) {
        const weeks = Math.trunc(quantity / 7);
        return computeTimeDifference('week', weeks);
      }
      if (quantity >= 7 && quantity >= 30) {
        return computeTimeDifference('week', quantity);
      }
      finalUnit = 'day';
      break;
    case 'week':
      if (quantity >= 30) {
        const months = Math.trunc(quantity / 30);
        return computeTimeDifference('month', months);
      }
      finalUnit = 'week';
      break;
    case 'month':
      if (quantity >= 12) {
        const years = Math.trunc(quantity / 12);
        return computeTimeDifference('year', years);
      }
      finalUnit = 'month';
      break;
    case 'year':
      finalUnit = 'year';
      break;
    default:
      throw new Error('invalid input');
  }
  return `${quantity} ${makeNoun(finalUnit, quantity)} ago`;
};

function timeWas(milliseconds, n) {
  const ms = n || '1516816290';
  if (milliseconds >= ms - 999) {
    return 'just now';
  }
  const seconds = Math.trunc((ms - milliseconds) / 1000);
  return computeTimeDifference('second', seconds);
}


export {
  timeWas,
};
