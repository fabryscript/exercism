//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase: string) =>
  phrase
    .replaceAll(/[-_,]/g, " ")
    .split(" ")
    .filter((w) => w.trim() !== "")
    .reduce((prev, curr) => (prev += curr[0]), "")
    .toUpperCase();
