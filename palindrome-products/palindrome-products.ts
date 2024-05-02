export class Palindromes {
  static generate({
    minFactor,
    maxFactor,
  }: {
    minFactor: number;
    maxFactor: number;
  }): {
    smallest: { value: number | null; factors: number[][] };
    largest: { value: number | null; factors: number[][] };
  } {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }

    let smallest: { value: number | null; factors: number[][] } = {
      value: null,
      factors: [],
    };
    let largest: { value: number | null; factors: number[][] } = {
      value: null,
      factors: [],
    };

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          if (smallest.value === null || product < smallest.value) {
            smallest = { value: product, factors: [[i, j]] };
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }
          if (largest.value === null || product > largest.value) {
            largest = { value: product, factors: [[i, j]] };
          } else if (product === largest.value) {
            largest.factors.push([i, j]);
          }
        }
      }
    }

    return { smallest, largest };
  }
}

function isPalindrome(num: number): boolean {
  const strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
}
