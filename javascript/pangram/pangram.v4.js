export const isPangram = (string) => {
  const alphabetString = string.toLowerCase().replace(/[^a-z]+/g, '');
  const alphabetSet = new Set(alphabetString);

  return alphabetSet.size === 26;
};
