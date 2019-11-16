function isTriangle(...sideofTriangle) {
  const [smallTriangleside, mediumTriangleside, largeTriangleside] = [
    ...sideofTriangle
  ].sort();

  return smallTriangleside + mediumTriangleside > largeTriangleside;
}

export { isTriangle };
