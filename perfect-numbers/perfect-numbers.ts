//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getFactors = (num: number) => {
  const factors: number[] = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

export const classify = (num: number) => {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const factors = getFactors(num);
  const aliquotSum = factors.reduce(
    (prevTotal, value) => (prevTotal += value),
    0
  );

  if (num === aliquotSum) return "perfect";
  if (num < aliquotSum) return "abundant";
  if (num > aliquotSum) return "deficient";

  throw new Error("Unexpected Error occurred");
};
