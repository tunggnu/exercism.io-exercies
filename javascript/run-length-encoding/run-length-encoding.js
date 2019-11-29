export const encode = (string) => {
  // A run is an object that presents a sequence of the same characters.
  // It also keeps a history of previous sequences.
  const run = {
    lastChar: '',
    lastCount: 1,
    _history: [],
    add(char) {
      // Adding the same character with the last one will extend the current sequence
      if (char === this.lastChar) return this.lastCount++;

      // Save the current sequence before building a new one.
      this._history.push(
        this.lastCount === 1 ? this.lastChar : this.lastCount + this.lastChar
      );

      // Build a new sequence.
      this.lastChar = char;
      return (this.lastCount = 1);
    },
    getHistory() {
      // Add an empty string to complete the last sequence.
      this.add('');

      return this._history.join('');
    },
  };

  // Iterate the entire input string to build sequences of the same characters.
  for (let char of string) run.add(char);

  return run.getHistory();
};

export const decode = (encodedSring) => {
  let count = '',
    decodedString = '';

  for (let char of encodedSring) {
    if (char >= '0' && char <= '9') {
      count += char;
    } else {
      decodedString += char.repeat(Number(count || 1));
      count = '';
    }
  }

  return decodedString;
};
