//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (sequence1, sequence2) => {
  if (typeof sequence1 !== "string" || typeof sequence2 !== "string")
    throw new TypeError("Provided sequences are not of type string");
  if (sequence1.length !== sequence2.length)
    throw new Error("strands must be of equal length");

  let errorCount = 0;

  for (let i = 0; i <= sequence1.length; i++) {
    if (sequence1[i] !== sequence2[i]) {
      errorCount++;
    }
  }

  return errorCount;
};
