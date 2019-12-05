
function splitLines(line, { preserveNewlines } = { preserveNewlines: false }) {
  const rnSplitedLines = line.split('\r\n');

  const toBeReturnedString = rnSplitedLines.reduce((acc, item, indexOuter) => {
    let splittedByN = item.split('\n');
    if (preserveNewlines) {
      if (splittedByN.length > 1) {
        splittedByN = splittedByN.map((str, index) => (index !== splittedByN.length - 1 ? str.concat('\n') : str));
      }
      const lastChar = splittedByN[splittedByN.length - 1];
      splittedByN[splittedByN.length - 1] = indexOuter !== rnSplitedLines.length - 1 ? `${lastChar}\r\n` : lastChar;
    }
    return [...acc, ...splittedByN];
  }, []);

  return toBeReturnedString;
}

export {
  splitLines,
};
