//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const newScores = {};

  const oldScores = Object.keys(old);
  const oldLetters = Object.values(old);

  oldLetters.forEach((letters, i) => {
    letters.forEach((letter) => {
      newScores[letter.toLowerCase()] = +oldScores[i];
    });
  });

  return newScores;
};
