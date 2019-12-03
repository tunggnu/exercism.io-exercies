export class Anagram {
  constructor(word) {
    this.origin = word.toString();

    this.isAnagram = function(candidate) {
      const candidateLowerCase = candidate.toString().toLowerCase();
      const origin = this.origin.toLowerCase();

      if (
        candidateLowerCase.length !== origin.length ||
        candidateLowerCase === origin
      ) {
        return false;
      }

      const candidateChars = Array.from(candidateLowerCase).sort();
      const originChars = [...origin].sort();

      return originChars.every((char, index) => char === candidateChars[index]);
    };
  }

  matches(words) {
    if (!Array.isArray(words)) throw new Error('The input is not an array');

    return words.filter((word) => this.isAnagram(word));
  }
}
