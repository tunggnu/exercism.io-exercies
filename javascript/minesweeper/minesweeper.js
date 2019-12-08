export const annotate = (input) => {
  const rowNum = input.length;

  if (rowNum === 0) return [];

  const colNum = input[0].length;

  if (colNum === 0) return input;

  // Clone the input and pad it with spaces
  let padInput = JSON.parse(JSON.stringify(input));
  padInput.unshift(' '.repeat(colNum));
  padInput.push(' '.repeat(colNum));
  padInput = padInput.map((row) => (' ' + row + ' ').split(''));

  for (let rowIndex = 1; rowIndex <= rowNum; rowIndex++) {
    for (let colIndex = 1; colIndex <= colNum; colIndex++) {
      if (padInput[rowIndex + 1] === undefined) {
        padInput.unshift(rowIndex);
        return padInput;
      }
      if (padInput[rowIndex][colIndex] !== '*') {
        padInput[rowIndex][colIndex] =
          (padInput[rowIndex - 1][colIndex - 1] === '*' ? 1 : 0) +
          (padInput[rowIndex - 1][colIndex] === '*' ? 1 : 0) +
          (padInput[rowIndex - 1][colIndex + 1] === '*' ? 1 : 0) +
          (padInput[rowIndex][colIndex - 1] === '*' ? 1 : 0) +
          (padInput[rowIndex][colIndex + 1] === '*' ? 1 : 0) +
          (padInput[rowIndex + 1][colIndex - 1] === '*' ? 1 : 0) +
          (padInput[rowIndex + 1][colIndex] === '*' ? 1 : 0) +
          (padInput[rowIndex + 1][colIndex + 1] === '*' ? 1 : 0);
      }
    }
  }

  // Trim the spaces around
  padInput.shift();
  padInput.pop();
  padInput = padInput.map((row) =>
    row
      .join('')
      .trim()
      .replace(/0/g, ' ')
  );

  return padInput;
};
