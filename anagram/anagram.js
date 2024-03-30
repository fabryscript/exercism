//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const splitAndSort = (input) => input.toLowerCase().split("").sort().join("");

export const findAnagrams = (inputString, _searchArray) => {
  // Type check
  if (typeof inputString !== "string")
    throw new Error("Input is not a valid string");
  const searchArray = [..._searchArray];

  const searchWord = splitAndSort(inputString);
  const results = [];

  searchArray.forEach((originalWord) => {
    const word = splitAndSort(originalWord);
    if (
      searchWord === word &&
      originalWord.toLowerCase() !== inputString.toLowerCase()
    )
      results.push(originalWord);
  });

  return results;
};
