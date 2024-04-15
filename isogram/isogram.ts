//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// I hate not having the right ts libs...

function replaceAll(
  input: string,
  search: string | RegExp,
  replacement: string
): string {
  return input.split(search).join(replacement);
}

export const isIsogram = (word: string) => {
  if (word === "") return true;

  const split = replaceAll(word.toLowerCase(), /[\s-]/g, "").split("");
  const set = new Set(split);

  return split.length === set.size;
};

console.log(isIsogram("angola"));
