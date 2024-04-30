//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  return Object.entries(old).reduce((newScores, [score, letters]) => {
    letters.forEach((letter) => {
      newScores[letter.toLowerCase()] = +score;
    });
    return newScores;
  }, {});
};
