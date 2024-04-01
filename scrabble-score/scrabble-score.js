//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getScore = (char) => {
  const tests = [
    { exp: /[AEIOULNRST]/, score: 1 },
    { exp: /[DG]/, score: 2 },
    { exp: /[BCMP]/, score: 3 },
    { exp: /[FHVMY]/, score: 4 },
    { exp: /[K]/, score: 5 },
    { exp: /[JX]/, score: 8 },
    { exp: /[QZ]/, score: 10 },
  ];

  let charScore = 0;

  tests.forEach(({ exp, score }) => {
    if (exp.test(char.toUpperCase())) charScore += score;
  });

  return charScore;
};

export const score = (word) => {
  if (typeof word !== "string")
    throw new TypeError("Input is not a valid string");

  if (word === "") return 0;

  let score = 0;

  word.split("").forEach((currChar) => {
    const charScore = getScore(currChar);
    score += charScore;
  });

  return score;
};
