export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._scoresDesc = Array.from(scores).sort((a, b) => b - a);
    this._personalBest = this._scoresDesc[0];
  }

  get scores() {
    return Array.from(this._scores);
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return this._personalBest;
  }

  get personalTopThree() {
    return this._scoresDesc.slice(0, 3);
  }
}
