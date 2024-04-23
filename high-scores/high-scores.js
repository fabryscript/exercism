//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  #scores = [];
  constructor(init = []) {
    this.#scores = init;
  }

  get scores() {
    return this.#scores;
  }

  get latest() {
    return this.#scores.at(-1);
  }

  get personalBest() {
    return [...this.#scores].sort((a, b) => b - a)[0];
  }

  get personalTopThree() {
    return [...this.#scores].sort((a, b) => b - a).slice(0, 3);
  }
}
