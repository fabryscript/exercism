//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBERS = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const MULTIPLES_OF_TEN = {
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const breakNumber = (n: number) =>
  n
    .toString()
    .split("")
    .reduceRight((acc, curr) => {
      if (acc.replaceAll("|.|", "").length % 3 === 0) {
        return curr + "|.|" + acc;
      }

      return curr + acc;
    });

const literalTriple = (n: string) => {
  const r = n.split("").reduce((acc, curr) => {
    return acc + curr; // wip
  });

  return r;
};

const replaceDots = (arr: string[]) => {
  const result: string[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    switch (true) {
      case arr.length - 1 - i === 1:
        result.push("thousand");
        break;
      case arr.length - 1 - i === 3:
        result.push("million");
        break;
      case arr.length - 1 - i === 5:
        result.push("billion");
        break;
      default:
        result.push(literalTriple(arr[i]));
        break;
    }
  }

  return result.reverse();
};

export const say = (n: number) => {
  if (n < 0) throw new Error("Number must be between 0 and 999,999,999,999.");
  if (n > 999_999_999_999)
    throw new Error("Number must be between 0 and 999,999,999,999.");

  const split = breakNumber(n).split("|");
  console.log(replaceDots(split));
};

say(1_123_456_789);
