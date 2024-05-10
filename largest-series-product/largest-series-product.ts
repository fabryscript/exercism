//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const slices = (series: string, sliceLength: number) => {
  const results: number[][] = [];

  for (let i = 0; i < series.length - sliceLength + 1; i++) {
    results.push(
      series
        .slice(i, i + sliceLength)
        .split("")
        .map(Number)
    );
  }

  return results;
};

export const largestProduct = (series: string, length: number) => {
  if (length > series.length || series.trim() === "")
    throw new Error("Span must be smaller than string length");
  if (/[a-zA-Z]+/g.test(series))
    throw new Error("Digits input must only contain digits");
  if (length < 0) throw new Error("Span must be greater than zero");

  const products = slices(series, length).map((serie) =>
    serie.reduce((total, curr) => total * curr)
  );

  return Math.max(...products);
};
