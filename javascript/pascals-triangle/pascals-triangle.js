export class Triangle {
  constructor(numberOfRows) {
    this._numberOfRows = numberOfRows;

    this._rows = new Array(this._numberOfRows)
      .fill(1)
      .reduce((rows, _, index) => {
        const lastRow = rows[rows.length - 1];
        const currentRow = new Array(index + 1)
          .fill(1)
          .map((_, index2) =>
            index2 === 0 || index2 === index
              ? 1
              : lastRow[index2] + lastRow[index2 - 1]
          );

        rows.push(currentRow);

        return rows;
      }, []);
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }

  get rows() {
    return this._rows;
  }
}
