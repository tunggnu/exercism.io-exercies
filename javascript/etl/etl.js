export const transform = (oldSystem) => {
  const newSystem = {};

  for (const key in oldSystem) {
    oldSystem[key].reduce((accu, letter) => {
      accu[letter.toLowerCase()] = Number(key);

      return accu;
    }, newSystem);
  }

  return newSystem;
};
