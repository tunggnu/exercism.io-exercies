export class Squares {
  constructor(N) {
    this.naturalSequence = Array(N)
      .fill(1)
      .map((n, index) => n + index);

    this._sumOfSquares = this._squareOfSum = 0;

    let sum = 0;

    for (const number of this.naturalSequence) {
      this._sumOfSquares += number ** 2;
      sum += number;
    }

    this._squareOfSum = sum ** 2;

    this._difference = this._squareOfSum - this._sumOfSquares;
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
