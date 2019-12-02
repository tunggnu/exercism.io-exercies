export const convert = (number) => {
  const rainDrops = new Map([
    [3, 'Pling'],
    [5, 'Plang'],
    [7, 'Plong'],
  ]);

  return (
    [...rainDrops.keys()]
      .filter((factor) => number % factor === 0)
      .map((factor) => rainDrops.get(factor))
      .join('') || number + ''
  );
};
