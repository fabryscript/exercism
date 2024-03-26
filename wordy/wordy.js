const UNKNOWN_OPERATION = "Unknown operation";
const SYNTAX_ERROR = "Syntax error";

class UnknownOperation extends Error {
  constructor() {
    super(UNKNOWN_OPERATION);
  }
}

class SyntaxError extends Error {
  constructor() {
    super(SYNTAX_ERROR);
  }
}

const operations = {
  plus: (x, y) => Number(x) + Number(y),
  minus: (x, y) => Number(x) - Number(y),
  multiplied: (x, y) => Number(x) * Number(y),
  divided: (x, y) => Number(x) / Number(y),
};

export const answer = (problem) => {
  if (typeof problem !== "string") return;

  let problems = problem
    .replace(/\?|What is|by\s/g, "")
    .trim()
    .split(" ");

  let finalAnswer = Number(problems[0]) || NaN;

  for (let i = 1; i < problems.length; i += 2) {
    if (!Number.isInteger(Number(problems[i]))) {
      // ˆ could be solved by using typescript 🤦🏻‍♂️
      if (!(problems[i] in operations)) throw new UnknownOperation();

      finalAnswer = operations[problems[i]](problems[i - 1], problems[i + 1]);

      problems[i + 1] = finalAnswer;
    } else if (
      Number.isInteger(Number(problems[i - 1])) &&
      Number.isInteger(Number(problems[i]))
    )
      throw new SyntaxError();
  }

  if (!Number.isInteger(finalAnswer)) throw new SyntaxError();

  return finalAnswer;
};
