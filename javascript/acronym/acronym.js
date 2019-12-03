export const parse = (string) => {
  return string
    .tostring()
    .split(/[\s_-]+/u)
    .map((string) => [...string][0].toUpperCase())
    .join('');
};
