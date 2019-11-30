export const solve = (x, y) => {
  if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) return NaN;

  const radius = Math.sqrt(x * x + y * y);

  if (radius > 10) return 0;
  if (radius > 5) return 1;
  if (radius > 1) return 5;
  return 10;
};
