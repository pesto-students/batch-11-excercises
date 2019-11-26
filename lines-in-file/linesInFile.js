import fs from "fs";

const linesInFile = path => {
  const text = fs.readFileSync(path).toString();
  const lines = text.split("\n");
  const count = lines.length - 1;
  return count;
};

export { linesInFile };
