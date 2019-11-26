import fs from "fs";

function linesInFile(filePath) {
  const textFile =  fs.readFileSync(filePath).toString();
    const textFileArray = textFile.split("\n");
    const count = textFileArray.length - 1;
    return count;
}

export { linesInFile };
