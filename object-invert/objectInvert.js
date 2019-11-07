function objectInvert(object) {
  const inverted = {};
  for (let key in object) {
    let value = object[key]
    inverted[value] = key;
  }

  return inverted;
}
console.log(objectInvert({ x: 25 }));

// export { objectInvert };
