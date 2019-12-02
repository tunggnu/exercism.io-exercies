export const convert = (number) => {
  const rainDrops = new Map([
    [3, 'Pling'],
    [5, 'Plang'],
    [7, 'Plong'],
  ]);

  let result = '';

  for (const [factor, string] of rainDrops) {
    if (number % factor === 0) result += string;
  }

  return result || number + '';
};
