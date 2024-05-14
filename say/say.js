const NUMBERS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const breakNumber = (n) => {
  const chunks = [];
  let numStr = n.toString();

  while (numStr.length > 0) {
    chunks.unshift(numStr.slice(-3));
    numStr = numStr.slice(0, -3);
  }

  return chunks;
};

const literalTriple = (n) => {
  let number = +n;
  if (number === 0) return "";

  let result = "";
  const hundred = ~~(number / 100);
  const rest = number % 100;
  const ten = ~~(rest / 10);
  const unit = rest % 10;

  if (hundred > 0) {
    result += `${NUMBERS[hundred]} hundred `;
  }

  if (rest > 0) {
    if (rest < 20) {
      result += NUMBERS[rest];
    } else {
      result += NUMBERS[ten * 10];
      if (unit > 0) {
        result += `-${NUMBERS[unit]}`;
      }
    }
  }

  return result.trim();
};

const replaceDots = (chunks) => {
  const result = [];

  const scales = ["", "thousand", "million", "billion"];

  for (let i = 0; i < chunks.length; i++) {
    const word = literalTriple(chunks[i]);
    if (word !== "") {
      result.push(
        word +
          (scales[chunks.length - 1 - i]
            ? " " + scales[chunks.length - 1 - i]
            : "")
      );
    }
  }

  return result;
};

export const say = (n) => {
  if (n < 0 || n > 999_999_999_999) {
    throw new Error("Number must be between 0 and 999,999,999,999.");
  }

  if (n === 0) return NUMBERS[0];

  const chunks = breakNumber(n);
  const words = replaceDots(chunks);

  return words.join(" ").trim();
};
