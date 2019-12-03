export const isIsogram = (string) => {
  const letters = string.toLowerCase().match(/[a-z]/g);

  if (letters === null || letters.length === 1) return true;

  const lettersAsc = letters.sort();

  return lettersAsc.every(
    (letter, index) =>
      index === lettersAsc.length - 1 || letter !== lettersAsc[index + 1]
  );
};
