const ALPHABET = Array.from('abcdefghijklmnopqrstuvwxyz');

export const isPangram = (string) => {
  const lowerCaseString = string.toLowerCase();

  return ALPHABET.every((char) => lowerCaseString.includes(char));
};
