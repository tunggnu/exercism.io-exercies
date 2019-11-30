export const isPangram = (string) => {
  const lowerCaseString = string.toLowerCase();
  let alphabet = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let char = lowerCaseString[i];

    if (char >= 'a' && char <= 'z' && !alphabet.includes(char))
      alphabet += char;

    if (alphabet.length === 26) return true;
  }

  return alphabet.length === 26;
};
