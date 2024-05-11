//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (matrix: string[]) => {
  return [...Array(Math.max(0, ...matrix.map((x) => x.length)))]
    .fill(null)
    .map((_, i) =>
      matrix.reduceRight((acc, row) => (row[i] || (acc ? " " : "")) + acc, "")
    );
};
