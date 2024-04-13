const countWords = (text) => {
  const wordMap = {};

  const replaced = text
    .toLowerCase()
    .replaceAll(/[!"#$%&()*+,\-./:;<=>?@[\]\\^_`{|}~\n\t]/g, " ")
    .trim();

  const split = replaced.split(" ");

  split.forEach((word) => {
    let splitWord = word.split("");
    if (splitWord[splitWord.length - 1] === "'" && splitWord[0] === "'") {
      splitWord.shift();
      splitWord.pop();
    }

    const joined = splitWord.join("");

    if (!wordMap[joined]) {
      return (wordMap[joined] = 1);
    } else {
      return wordMap[joined]++;
    }
  });

  return wordMap;
};
