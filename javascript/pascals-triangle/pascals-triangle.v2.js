export class Triangle {
  constructor(numberOfRows) {
    this._numberOfRows = numberOfRows;

    this._rows = new Array(this._numberOfRows).fill([1]).reduce((rows, _) => {
      if (rows.length === 0) return [[1]];

      const lastRow = rows[rows.length - 1];
      
      const currentRow = lastRow.map((number, index) =>
        index === 0 ? 1 : number + lastRow[index - 1]
      );

      currentRow.push(1);
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
