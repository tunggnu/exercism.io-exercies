export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (
      !Triangle.isPositiveNumber(this.a) ||
      !Triangle.isPositiveNumber(this.b) ||
      !Triangle.isPositiveNumber(this.c) ||
      this.a + this.b <= this.c ||
      this.c + this.b <= this.a ||
      this.a + this.c <= this.b
    ) {
      throw new Error("Invalid sides.");
    }

    if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    }

    if (this.a === this.b || this.b === this.c || this.c === this.a) {
      return "isosceles";
    }

    return "scalene";
  }

  static isPositiveNumber(x) {
    return typeof x === "number" && x > 0;
  }
}
