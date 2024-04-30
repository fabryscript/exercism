//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Matrix {
  #matrix = [];

  constructor(init) {
    this.#matrix = init;
  }

  get rows() {
    return this.#matrix;
  }

  get columns() {
    const cols = [];

    for (let colIndex = 0; colIndex < this.rows[0].length; colIndex++) {
      const col = [];
      for (let rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
        col.push(this.rows[rowIndex][colIndex]);
      }
      cols.push(col);
    }

    return cols;
  }

  at(row, col) {
    return this.#matrix[row][col];
  }
}

export const saddlePoints = (grid) => {
  const matrix = new Matrix(grid);

  const rows = matrix.rows;
  const cols = matrix.columns;

  const candidates = [];

  rows.forEach((row, rowIndex) => {
    if (row.length === 0) return;

    // Biggest value inside this row
    const biggestRowValue = Math.max(...row);

    // Iterate over each element in the row
    row.forEach((value, columnIndex) => {
      // Check if the element is the biggest value in the row
      if (value === biggestRowValue) {
        // Check if it's also the smallest value in its column
        const smallestColValue = Math.min(...cols[columnIndex]);
        if (smallestColValue === biggestRowValue) {
          candidates.push({ row: rowIndex + 1, column: columnIndex + 1 });
        }
      }
    });
  });

  return candidates;
};
