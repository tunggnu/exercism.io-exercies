export const transform = (oldSystem) => {
  return Object.keys(oldSystem).reduce((acc, key) => {
    return oldSystem[key].reduce((acc, letter) => {
      acc[letter.toLowerCase()] = Number(key);
      return acc;
    }, acc);
  }, {});
};
