function isTriangle(...sides) {
  const sidesCollection = sides;
  const longest = Math.max(...sides);
  const smallest = Math.min(...sides);

  let medium = sidesCollection.find(side => {
    return side !== longest && side !== smallest;
  });

  const hypotenuse = Math.sqrt(Math.pow(smallest, 2) + Math.pow(medium, 2));

  return hypotenuse === longest;
}

export { isTriangle };
