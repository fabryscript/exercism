// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const ALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const _randomNumber = (range: number = ALPHABET.length) => {
  return Math.floor(Math.random() * range);
};

export class Robot {
  static releaseNames: () => void;
  static pool = new Map();

  #name: string;

  constructor() {
    this.#name = this._generateName();
  }

  private _generateName() {
    const firstLetter = ALPHABET[_randomNumber()];
    const secondLetter = ALPHABET[_randomNumber()];

    const digit1 = _randomNumber(9);
    const digit2 = _randomNumber(9);
    const digit3 = _randomNumber(9);

    return `${firstLetter}${secondLetter}${digit1}${digit2}${digit3}`;
  }

  _newName() {
    let name: string;

    do {
      name = this._generateName();
    } while (Robot.pool.has(name));

    Robot.pool.set(name, true);

    return name;
  }

  get name() {
    return this.#name;
  }

  reset() {
    this.#name = this._newName();
  }
}

Robot.releaseNames = () => {
  Robot.pool = new Map();
};
