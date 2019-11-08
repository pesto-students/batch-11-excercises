
function daysInMonth(year, month) {
  if (month !== 2) {
    if (month % 2 === 0) {
      if (month < 7) {
        return 30;
      }
      return 31;
    }
    if (month > 7) {
      return 31;
    }
    return 30;
  }
  if (year % 4 !== 0) {
    return 28;
  }
  if (year % 400 === 0) {
    return 29;
  }
  if (year % 100 === 0) {
    return 28;
  }
  return 29;
}

export {
  daysInMonth,
};
