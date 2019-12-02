export class Squares {
  constructor(N) {
    this.naturalSequence = Array(N)
      .fill(1)
      .map((n, index) => n + index);

    this._sumOfSquares = this.naturalSequence.reduce(
      (accu, num) => accu + num ** 2,
      0
    );

    this._squareOfSum = Math.pow(
      this.naturalSequence.reduce((accu, num) => accu + num, 0),
      2
    );

    this._difference = this._squareOfSum - this._sumOfSquares
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._difference;
  }
}
