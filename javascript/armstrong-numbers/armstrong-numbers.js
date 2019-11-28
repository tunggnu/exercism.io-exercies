export const validate = (number) => {
  if (!Number.isInteger(number) || number < 0) return false;

  const digits = [];
  const originNumber = number;

  while(number >= 10) {
    digits.push(number % 10);

    number = Math.floor(number / 10);
  }

  digits.push(number);

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], digits.length);
  }

  return originNumber === sum;
};
