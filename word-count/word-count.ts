//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text: string) => {
  const wordMap: Record<string, number> = {};

  text
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    ?.forEach((word) => (wordMap[word] = wordMap[word] + 1 || 1));

  return wordMap;
};

console.log(countWords("one,\ntwo,\nthree"));
