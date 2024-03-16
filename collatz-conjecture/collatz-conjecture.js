//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (input, iterations = 0) => {
  if (!(input > 0)) throw new Error("Only positive numbers are allowed");
  if (input === 1) return iterations;

  return input % 2 === 0
    ? steps(input / 2, iterations + 1)
    : steps(input * 3 + 1, iterations + 1);
};
