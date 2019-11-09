function daysInMonth(year, month) {
  const isLeap = year % 4 === 0;
  if (month === 2) {
    return isLeap ? 29 : 28;
  }

  const isEvenIndexMonth = month % 2 === 0;
  if (isEvenIndexMonth) {
    return 30;
  } else {
    return 31;
  }
}

export { daysInMonth };
