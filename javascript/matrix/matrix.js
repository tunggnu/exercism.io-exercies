export class Matrix {
  constructor(matrixString) {
    this.matrix = matrixString
      .split('\n')
      .map((string) => string.split(' ').map((digits) => Number(digits)));
  }

  get rows() {
    // Return a clone of the matrix
    return this.matrix.map((row) => row.slice(0));
  }

  get columns() {
    const numberOfColumns = this.matrix[0].length;
    const columns = [];

    for (let i = 0; i < numberOfColumns; i++) {
      columns.push(this.matrix.map((row) => row[i]));
    }

    return columns;
  }
}
