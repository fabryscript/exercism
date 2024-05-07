export function triplets({
  minFactor,
  maxFactor,
  sum,
}: {
  sum: number;
  minFactor?: number;
  maxFactor?: number;
}) {
  const triplets: Triplet[] = [];

  const upperBound = maxFactor ? Math.min(maxFactor, sum) : sum;

  for (let a = minFactor || 1; a <= upperBound; a++) {
    for (let b = a + 1; b <= upperBound; b++) {
      let c = sum - a - b;

      if (c <= b) break; // No need to continue if c is not greater than b

      if (maxFactor && c > maxFactor) continue; // Skip if c exceeds maxFactor
      if (minFactor && c < minFactor) continue; // Skip if c is less than minFactor

      if (a ** 2 + b ** 2 === c ** 2) {
        triplets.push(new Triplet(a, b, c));
      }
    }
  }

  return triplets;
}

class Triplet {
  #arr: number[];

  constructor(a: number, b: number, c: number) {
    this.#arr = [a, b, c];
  }

  toArray() {
    return this.#arr;
  }
}
