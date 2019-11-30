export const isPangram = (string) => {
  const alphabetChars = Array.from(string.toLowerCase()).filter(
    (char) => char >= 'a' && char <= 'z'
  );

  const alphabetSet = alphabetChars.reduce((set, char) => {
    if (set.indexOf(char) === -1) set.push(char);
    return set;
  }, []);

  return alphabetSet.length === 26;
};
