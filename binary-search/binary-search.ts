//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (arr: number[], searchValue: number) => {
  if (arr.length === 0) throw new Error("Value not in array");

  const sorted = arr.sort((a, b) => (a > b ? 1 : -1));
  let first = 0;

  let last = sorted.length - 1;

  if (searchValue > sorted[last]) throw new Error("Value not in array");

  while (first <= last) {
    let index = Math.floor((first + last) / 2);

    if (sorted[index] === searchValue) return index;
    else if (sorted[index] > searchValue) {
      last = index - 1;
    } else {
      first = index + 1;
    }
  }

  throw new Error("Value not in array");
};
