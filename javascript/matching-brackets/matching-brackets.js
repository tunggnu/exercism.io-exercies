export const matchingBrackets = (string) => {
  const openingBrackets = '{[(';
  const closingBrackets = '}])';
  const bracketMap = new Map([
    ['}', '{'],
    [')', '('],
    [']', '['],
  ]);
  const bracketStack = [];

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      bracketStack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (
        bracketStack.length === 0 ||
        bracketMap.get(char) !== bracketStack.pop()
      )
        return false;
    }
  }

  return bracketStack.length === 0;
};
