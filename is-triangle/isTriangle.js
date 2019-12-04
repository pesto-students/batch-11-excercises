function isTriangle(...sides) {
  // Triangle Inequality Theorem states that : a+b > c, a+c > b, and b+c > a
  const [a, b, c] = sides;
  return a + b > c && a + c > b && b + c > a;
}

export {
  isTriangle,
};
