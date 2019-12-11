const largeOfFour = (list) => {
  const large = [];
  list.forEach((i) => {
    large.push(Math.max(...i));
  });
  return large;
};

export { largeOfFour };
