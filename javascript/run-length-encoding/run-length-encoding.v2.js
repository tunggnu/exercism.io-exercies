export const encode = str => {
  const encoded = sequence => {
    const arrChars = Array.from(sequence);

    return `${arrChars.length}${arrChars[0]}`;
  };

  return str.replace(/(\D)\1+/gu, encoded);
};

export const decode = str => {
  const decoded = (sequence, count, char) => {
    let num = parseInt(count);

    return char.repeat(num);
  };

  return str.replace(/(\d+)(\D)/gu, decoded);
};
