export const transpose = (strings) => {
  if (strings.length === 0) return [];

  const maxLength = Math.max(...strings.map((string) => string.length));
  const normalizedStrings = strings.map((string) => string.padEnd(maxLength));

  const getNormalizedColumn = (index) =>
    normalizedStrings.map((string) => string[index]).join('');

  const columns = [...normalizedStrings[0]].map((_, index) =>
    getNormalizedColumn(index)
  );

  columns[columns.length - 1] = columns[columns.length - 1].trimEnd();

  return columns;
};
