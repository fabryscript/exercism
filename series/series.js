//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  #series;

  constructor(series) {
    this.#series = series;
  }

  slices(sliceLength) {
    if (this.#series.length === 0) throw new Error("series cannot be empty");
    if (sliceLength < 0) throw new Error("slice length cannot be negative");
    if (sliceLength === 0) throw new Error("slice length cannot be zero");
    if (sliceLength > this.#series.length)
      throw new Error("slice length cannot be greater than series length");

    const results = [];

    for (let i = 0; i < this.#series.length - sliceLength + 1; i++) {
      results.push(
        this.#series
          .slice(i, i + sliceLength)
          .split("")
          .map((c) => +c)
      );
    }

    return results;
  }
}
