export const gigasecond = date => {
  return new Date(date.getTime() + gigasecondInMilisecond);
};

const gigasecondInMilisecond = 1e12;
