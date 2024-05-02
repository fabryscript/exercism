//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const series = (n) =>
  Array(n)
    .fill(null)
    .map((_, i) => i + 1);

export class Squares {
  #n = 0;

  constructor(n) {
    this.#n = n;
  }

  get sumOfSquares() {
    return series(this.#n).reduce((total, curr) => total + curr ** 2, 0);
  }

  get squareOfSum() {
    const res = series(this.#n).reduce((total, curr) => total + curr, 0);
    return res ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
