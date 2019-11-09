import { parse } from "path";

function binaryAgent(binaryString) {

  let splittedBinary = binaryString.split(' ');
  let binCode = [];

  for(let i = 0; i < splittedBinary.length; i++) {
    binCode.push(String.fromCharCode(parseInt(splittedBinary[i], 2)));
  }
  return binCode.join('');
}

export {
  binaryAgent,
};
