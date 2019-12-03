export const isIsogram = (string) => {
  const letters = string.toLowerCase().match(/[a-z]/g);

  if (letters === null || letters.length === 1) return true;

  const letterSet = new Set(letters);

  return letters.length === letterSet.size;
};
