//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  isTriangle: boolean = false;
  sides: number[] = [];

  constructor(...sides: number[]) {
    if (sides.includes(0)) {
      return;
    }

    if (
      sides[0] + sides[1] >= sides[2] &&
      sides[1] + sides[2] >= sides[0] &&
      sides[0] + sides[2] >= sides[1]
    ) {
      this.isTriangle = true;
      this.sides = [...sides];
      return;
    }
  }

  _isEquilateral() {
    if (!this.isTriangle) return false;

    return new Set(this.sides).size === 1;
  }

  get isEquilateral() {
    return this._isEquilateral();
  }

  _isIsosceles() {
    if (!this.isTriangle) return false;

    return new Set(this.sides).size <= 2;
  }

  get isIsosceles() {
    return this._isIsosceles();
  }

  _isScalene() {
    if (!this.isTriangle) return false;

    return new Set(this.sides).size === 3;
  }

  get isScalene() {
    return this._isScalene();
  }
}

console.log(new Triangle(1, 1, 3).isIsosceles);
