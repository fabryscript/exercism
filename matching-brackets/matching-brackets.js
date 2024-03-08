//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (inputString) => {
  const stack = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (bracketPairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const top = stack.pop();
      if (!top || bracketPairs[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
