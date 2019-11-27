const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const value = ([firstColor, secondColor]) => (
  COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor)
);
