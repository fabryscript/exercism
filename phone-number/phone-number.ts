//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phone: string) => {
  if (/[a-zA-Z]/g.test(phone)) {
    throw new Error("Letters not permitted");
  }

  if (/[@:!?]+/g.test(phone)) {
    throw new Error("Punctuations not permitted");
  }

  const matched = phone.match(/\d/g);

  if (!matched)
    throw new Error("No digits matched in the provided phone number");

  let joinedDigits = matched.join("");

  if (joinedDigits.length > 11) {
    throw new Error("More than 11 digits");
  }

  if (joinedDigits.length < 10) {
    throw new Error("Incorrect number of digits");
  }

  if (joinedDigits.length === 11) {
    if (joinedDigits[0] !== "1") {
      throw new Error("11 digits must start with 1");
    }

    if (joinedDigits[1] === "0") {
      throw new Error("Area code cannot start with zero");
    }

    if (joinedDigits[1] === "1") {
      throw new Error("Area code cannot start with one");
    }

    if (joinedDigits[4] === "0") {
      throw new Error("Exchange code cannot start with zero");
    }

    if (joinedDigits[4] === "1") {
      throw new Error("Exchange code cannot start with one");
    }

    joinedDigits = joinedDigits.slice(1);

    return joinedDigits;
  }

  if (joinedDigits[0] === "0") {
    throw new Error("Area code cannot start with zero");
  }

  if (joinedDigits[0] === "1") {
    throw new Error("Area code cannot start with one");
  }

  if (joinedDigits[3] === "0") {
    throw new Error("Exchange code cannot start with zero");
  }

  if (joinedDigits[3] === "1") {
    throw new Error("Exchange code cannot start with one");
  }

  return joinedDigits;
};

console.log(clean("1 (223) 156-7890"));
