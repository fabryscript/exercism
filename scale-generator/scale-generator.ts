//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const FLATS_CHROMATIC = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const SHARPS_CHROMATIC = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const NATURAL_ROOTS = ["C", "a"];

const FLATS_ROOTS = [
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "d",
  "g",
  "c",
  "f",
  "bb",
  "eb",
];

const STEPS = {
  m: 1,
  M: 2,
  A: 3,
};

export class Scale {
  #rootNote = "";
  #selectedArray: string[] = [];

  constructor(tonic: string) {
    this.#rootNote = tonic;
    this.#selectedArray =
      FLATS_ROOTS.includes(this.#rootNote) &&
      !NATURAL_ROOTS.includes(this.#rootNote)
        ? FLATS_CHROMATIC
        : SHARPS_CHROMATIC;
  }

  chromatic() {
    const rootNote =
      this.#rootNote.charAt(0).toUpperCase() + this.#rootNote.slice(1);

    return this.from(rootNote);
  }

  interval(intervals: string) {
    const convertedInterval = this.convertIntervals(intervals);
    const chromatic = this.chromatic();

    const convertedSteps = convertedInterval.map((_, i) =>
      convertedInterval.slice(0, i).reduce((p, c) => (p + c) % 12, 0)
    );

    return convertedSteps.map((chromaticIndex) => chromatic[chromaticIndex]);
  }

  convertIntervals(intervals: string) {
    return [...intervals.split("").map((interval) => STEPS[interval]), 1];
  }

  from(note: string) {
    const index = this.#selectedArray.indexOf(note);

    return this.#selectedArray
      .slice(index)
      .concat(this.#selectedArray.slice(0, index));
  }
}
