//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OBJECTS = [
  "",
  "Partridge in a Pear Tree",
  "Turtle Doves",
  "French Hens",
  "Calling Birds",
  "Gold Rings",
  "Geese-a-Laying",
  "Swans-a-Swimming",
  "Maids-a-Milking",
  "Ladies Dancing",
  "Lords-a-Leaping",
  "Pipers Piping",
  "Drummers Drumming",
];

const CARDINAL_NUMBERS = [
  "",
  "a",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

const ORDINAL_NUMBERS = [
  "",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const listFormat = (list) =>
  list.reduce((acc, curr, i) =>
    i === list.length - 1 ? acc + `, and ${curr}` : acc + `, ${curr}`
  ) + ".";

const items = (items) => {
  const res = [];

  let i = 1;
  while (i <= items) {
    res.unshift(`${CARDINAL_NUMBERS[i]} ${OBJECTS[i]}`);
    i++;
  }

  return listFormat(res);
};

const verse = (n, maxVerse) =>
  `On the ${
    ORDINAL_NUMBERS[n]
  } day of Christmas my true love gave to me: ${items(n)}${
    maxVerse ? (n === maxVerse ? "\n" : "\n\n") : "\n"
  }`;

export const recite = (from, to) => {
  let total = "";

  if (!to) {
    return verse(from);
  }

  let i = from;
  while (i <= to) {
    total += verse(i, to);
    i++;
  }

  return total;
};
