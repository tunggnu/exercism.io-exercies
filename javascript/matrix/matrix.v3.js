export class Matrix {
  constructor(matrixString) {
    this.rowArray = matrixString
      .split('\n')
      .map((string) => string.split(' ').map(Number));

    this.columnArray = [...this.rowArray[0].keys()].map((index) =>
      this.rowArray.map((row) => row[index])
    );
  }

  get rows() {
    // Return a clone of the rows
    return this.rowArray.map((row) => row.slice(0));
  }

  get columns() {
    // Return a clone of the columns
    return this.columnArray.map((column) => column.slice(0));
  }
}
