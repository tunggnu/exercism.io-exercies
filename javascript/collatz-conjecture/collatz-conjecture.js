export const steps = num => {
  if (!Number.isInteger(num) || num < 1) {
    throw new Error("Only positive numbers are allowed");
  }

  let steps = 0;

  while (num > 1) {
    num = (num % 2 === 1) ? (num * 3 + 1) : (num / 2);
    steps++;
  }

  return steps;
};
