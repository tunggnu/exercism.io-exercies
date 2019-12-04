export class Series {
  constructor(digits) {
    this._digits = Array.from(digits).map(Number);
  }

  get digits() {
    return this._digits;
  }

  slices(length) {
    if (length > this._digits.length) throw new Error('Slice size is too big.');

    const result = [];

    for (let i = 0; i <= this._digits.length - length; i++) {
      result.push(this._digits.slice(i, i + length));
    }

    return result;
  }
}
