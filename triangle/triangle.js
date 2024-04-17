//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  #triangleSides;
  #isTriangle;
  constructor(...sides) {
    if (sides.length > 3) {
      throw new Error("A triangle should have only 3 sides");
    }

    if (
      sides[0] + sides[1] >= sides[2] &&
      sides[1] + sides[2] >= sides[0] &&
      sides[0] + sides[2] >= sides[1]
    )
      this.#isTriangle = true;
    else this.#isTriangle = false;
    this.#triangleSides = [...sides];
  }

  get isEquilateral() {
    if (!this.#isTriangle) return false;
    const total = this.#triangleSides.reduce((prev, curr) => prev + curr, 0);
    return total === this.#triangleSides[0] * 3;
  }

  get isIsosceles() {
    if (!this.#isTriangle) return false;
    const total = this.#triangleSides.reduce(
      (prev, curr) => (prev === curr ? prev + curr : 0),
      0
    );
    return total > 0;
  }

  get isScalene() {
    if (!this.#isTriangle) return false;
    const total = this.#triangleSides.reduce(
      (prev, curr) => (prev === curr ? prev + curr : 0),
      0
    );
    return total === 0;
  }
}
