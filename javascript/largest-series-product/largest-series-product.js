export const largestProduct = (digits, n) => {
  if (Number.isNaN(Number(digits)) || n < 0) throw new Error('Invalid input.');

  if (n === 0) return 1;

  if (n > digits.length) throw new Error('Slice size is too big.');

  let max = 0;

  for (let i = 0; i <= digits.length - n; i++) {
    max = Math.max(
      max,
      digits
        .slice(i, i + n)
        .split('')
        .map((char) => Number(char))
        .reduce((acc, digit) => acc * digit)
    );
  }

  return max;
};
