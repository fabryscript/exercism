//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const primeFactors = (number) => {
  const factors = []
  let value = number;
  for (let divisor = 2; value > 1; divisor++) {
    for (; value % divisor === 0; value /= divisor) {
      factors.push(divisor)
    }
  }
  return factors
};