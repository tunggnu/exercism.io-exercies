//
// This is the jpridx's solution. It is very easy to understand.
// https://exercism.io/tracks/javascript/exercises/pascals-triangle/solutions/a8e8567a46214afe833f6d8987f8604b
//

export class Triangle {
  constructor(rows) {
    this.triangle = new Array(rows);
    this.triangle[0] = [1];

    for (let i = 1; i < rows; i++) {
      this.triangle[i] = this.triangle[i - 1].map((ele, idx, array) =>
        idx === 0 ? 1 : ele + array[idx - 1]
      );

      this.triangle[i].push(1);
    }
  }

  get lastRow() {
    return this.triangle[this.triangle.length - 1];
  }

  get rows() {
    return this.triangle;
  }
}
