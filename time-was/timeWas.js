
function getPluralChar(number) {
  return number > 1 ? 's' : '';
}

function timeWas(fromMilliseconds, toMilliseconds = Date.now()) {
  const difference = toMilliseconds - fromMilliseconds;
  const oneSecondMilliseconds = 1000;
  const oneMinuteMilliseconds = 60 * oneSecondMilliseconds;
  const oneHourMilliseconds = 60 * oneMinuteMilliseconds;
  const oneDayMilliseconds = 24 * oneHourMilliseconds;
  const oneWeekMilliseconds = 7 * oneDayMilliseconds;
  const oneMonthMilliseconds = 30 * oneDayMilliseconds;
  const oneYearMilliseconds = 12 * oneMonthMilliseconds;

  const isGreaterThanYear = difference / oneYearMilliseconds;
  if (isGreaterThanYear >= 1) {
    const yearsDifference = Math.floor(difference / oneYearMilliseconds);
    return `${yearsDifference} year${getPluralChar(yearsDifference)} ago`;
  }

  const monthsDifference = Math.floor(difference / oneMonthMilliseconds);
  const isGreaterThanMonth = monthsDifference >= 1;
  if (isGreaterThanMonth) {
    return `${monthsDifference} month${getPluralChar(monthsDifference)} ago`;
  }

  const weeksDifference = Math.floor(difference / oneWeekMilliseconds);
  const isGreaterThanWeek = weeksDifference >= 1;
  if (isGreaterThanWeek) {
    return `${weeksDifference} week${getPluralChar(weeksDifference)} ago`;
  }

  const daysDifference = Math.floor(difference / oneDayMilliseconds);
  const isGreaterThanDay = daysDifference >= 1;
  if (isGreaterThanDay) {
    return `${daysDifference} day${getPluralChar(daysDifference)} ago`;
  }

  const hoursDifference = Math.floor(difference / oneHourMilliseconds);
  const isGreaterThanHour = hoursDifference >= 1;
  if (isGreaterThanHour) {
    return `${hoursDifference} hour${getPluralChar(hoursDifference)} ago`;
  }

  const minutesDifference = Math.floor(difference / oneMinuteMilliseconds);
  const isGreaterThanMinutes = minutesDifference >= 1;
  if (isGreaterThanMinutes) {
    return `${minutesDifference} minute${getPluralChar(minutesDifference)} ago`;
  }

  const secondsDifference = Math.floor(difference / oneSecondMilliseconds);
  const isGreaterThanSeconds = secondsDifference >= 5;
  if (isGreaterThanSeconds) {
    return `${secondsDifference} second${getPluralChar(secondsDifference)} ago`;
  }

  return 'just now';
}

export {
  timeWas,
};
