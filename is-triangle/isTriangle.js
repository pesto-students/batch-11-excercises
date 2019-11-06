
function isTriangle(...sideofTriangle) {

  let [smallTriangleside,mediumTriangleside,largeTriangleside] = [...sideofTriangle].sort();

  return smallTriangleside + mediumTriangleside > largeTriangleside
}

export {
  isTriangle,
};
