import {COLORS} from '../resistor-color/resistor-color';

export const value = ([firstColor, secondColor]) => (
  COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor)
);
