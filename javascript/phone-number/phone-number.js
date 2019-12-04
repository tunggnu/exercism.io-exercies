export class PhoneNumber {
  constructor(input) {
    const fullDigits = input.replace(/[^\d]/g, '').replace(/^1/, '');
    const firstAreaDigit = fullDigits.slice(0, 1);
    const firstExchangeDigit = fullDigits.slice(3, 4);

    this._number =
      fullDigits.length === 10 &&
      firstAreaDigit > '1' &&
      firstExchangeDigit > '1'
        ? fullDigits
        : null;
  }

  number() {
    return this._number;
  }
}
