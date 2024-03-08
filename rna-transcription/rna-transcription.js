//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const indexedDna = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

const getSingleRna = (char) => {
  return indexedDna[char];
}

export const toRna = (inputSequence) => {
  const transposedSequence = inputSequence.split("").map((char) => getSingleRna(char));
  return transposedSequence.join("")
};
