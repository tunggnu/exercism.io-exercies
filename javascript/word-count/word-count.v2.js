export class Words {
  count(statement = '') {
    const words = statement
      .trim()
      .toLowerCase()
      .split(/\s+/);

    return words.reduce((wordCount, word) => {
      wordCount[word] = Object.prototype.hasOwnProperty.call(wordCount, word)
        ? wordCount[word] + 1
        : 1;

      return wordCount;
    }, {});
  }
}
