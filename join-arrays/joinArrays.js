import { join } from "path";

function joinArrays(...groupArrays) {
  const joinedArray = [];
  for (const singleArray of groupArrays) {
    joinedArray.push(...singleArray);
  }
  return joinedArray;
}

export {
  joinArrays,
};
