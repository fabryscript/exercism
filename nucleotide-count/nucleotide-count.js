//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  if (typeof strand !== "string")
    throw new TypeError("Provided strand is not a string");

  const regex = /^[ACGT]*$/;
  if (!regex.test(strand)) throw new Error("Invalid nucleotide in strand");

  let nucleotideCount = { A: 0, C: 0, G: 0, T: 0 };
  const splittedSequence = strand.split("");

  splittedSequence.forEach((nucleotide) => {
    nucleotideCount[nucleotide]++;
  });

  return Object.values(nucleotideCount).join(" ");
}
