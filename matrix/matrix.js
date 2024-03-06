//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    if (typeof input !== "string") return; // remove this
    this.matrix = input
      .split("\n")
      .map((row) => row.split(" ").map((stringValue) => Number(stringValue)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    const transposedMatrix = [];

    for (let colIndex = 0; colIndex < this.matrix[0].length; colIndex++) {
      const col = [];
      for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
        col.push(this.matrix[rowIndex][colIndex]);
      }
      transposedMatrix.push(col);
    }

    return transposedMatrix;
  }
}
