export class Words {
  count(statement = '') {
    const wordCount = {};
    const words = statement
      .toLowerCase()
      .trim()
      .split(/\s+/);

    words.forEach((word) => {
      wordCount[word] =
        (Object.prototype.hasOwnProperty.call(wordCount, word)
          ? wordCount[word]
          : 0) + 1;
    });

    return wordCount;
  }
}
