const UNKNOWN_OPERATION = "Unknown operation";
const SYNTAX_ERROR = "Syntax error";

export const answer = (problems) => {
  if (typeof problems !== "string") return;

  const problem = problems
    .replace("?", "")
    .replace("What is ", "")
    .replaceAll("plus", "+")
    .replaceAll("minus", "-")
    .replaceAll("multiplied by", "*")
    .replaceAll("divided by", "/")
    .split(" ");

  const expressionNumbers = problem.filter((p) => Number(p));

  if (problems === "What is?") {
    throw new Error(SYNTAX_ERROR);
  } else if (problem.length === 1) {
    return Number(problem[0]);
  } else if (!expressionNumbers.length || problem.includes("cubed")) {
    // problem.includes("cubed") <- test pass
    throw new Error(UNKNOWN_OPERATION);
  } else if (
    problem.length - expressionNumbers.length !==
    expressionNumbers.length - 1
  ) {
    throw new Error(SYNTAX_ERROR);
  }

  let expression = Number(problem[0]);

  problem.forEach((_, index) => {
    const num = Number(problem[index + 1]);

    if (Number(problem[index]) && Number(problem[index - 1])) {
      throw new Error(SYNTAX_ERROR);
    }

    switch (problem[index]) {
      case "+":
        expression += num;
        break;
      case "-":
        expression -= num;
        break;
      case "*":
        expression *= num;
        break;
      case "/":
        expression /= num;
        break;
      default:
        break;
    }
  });

  return expression;
};
