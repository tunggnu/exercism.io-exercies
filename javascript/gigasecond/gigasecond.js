export const gigasecond = (date) => {
  return new Date(date.valueOf() + gigasecondInMilisecond);
};

const gigasecondInMilisecond = 10 ** 9 * 1000;