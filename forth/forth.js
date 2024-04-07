//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  #stack = [];

  ops = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "/": (x, y) => {
      if (y === 0) {
        throw new Error("Division by zero");
      }

      return x / y;
    },
    "*": (x, y) => x * y,
    dup: (s) => {
      if (s.length === 0) {
        throw new Error("Stack empty");
      }
      s.push(this.at(s, -1));
      return s;
    },
    drop: (s) => {
      if (s.length === 0) {
        throw new Error("Stack empty");
      }
      s.pop();
      return s;
    },
    swap: (s) => {
      if (s.length < 2) {
        throw new Error("Stack empty");
      }
      const secondLastElement = this.at(s, -2);
      const lastElement = this.at(s, -1);

      s.splice(-2, 2, lastElement, secondLastElement);

      return s;
    },
    over: (s) => {
      if (s.length < 2) {
        throw new Error("Stack empty");
      }
      const secondLastElement = this.at(s, -2);

      s.push(secondLastElement);

      return s;
    },
  };

  aliases = {
    "+": "+",
    "-": "-",
    "/": "/",
    "*": "*",
    dup: "dup",
    drop: "drop",
    swap: "swap",
    over: "over",
  };

  constructor() {
    this.#stack = [];
  }

  /**
   * Gets an item of an array based by an index which could also be negative
   * @param input The input string or array
   * @param i the index, which can also be negative
   * @returns The item of the array or string
   */
  at(input, i) {
    const idx = i < 0 ? (i + input.length) % input.length : i;
    return input[idx];
  }

  evaluate(_input) {
    const input = _input.trim().toLowerCase();
    /**
     * This means that the word is a new alias definition
     */
    if (input[0] === ":" && this.at(input, -1) === ";") {
      const trimCommand = input.replace(/[:;]/g, "").trim();
      const split = trimCommand.split(" ");

      const name = split[0];
      if (Number.isInteger(+name)) throw new Error("Invalid definition");
      split.shift();
      const command = split.join(" ");

      this.aliases[name] = command;
      return;
    }

    const aliases = Object.keys(this.aliases);
    const replacedInput = input
      .split(" ")
      .map((keyword) => {
        if (Number.isInteger(+keyword)) return keyword;
        if (aliases.includes(keyword)) {
          return this.aliases[keyword];
        }

        throw new Error("Unknown command");
      })
      .join(" ")
      .split(" ");

    replacedInput.forEach((_word) => {
      /**
       * This means that the word is a number and that we should push
       * it into the stack
       */
      if (!Number.isNaN(+_word)) {
        return this.#stack.push(+_word);
      }
      /**
       * This means that the word is an operation
       */
      const op = this.aliases[_word];
      switch (op) {
        case "+":
        case "-":
        case "/":
        case "*":
          /**
           * An operation should ideally be performed on the last two
           * items of the stack
           */
          if (this.#stack.length < 2) {
            throw new Error("Stack empty");
          }

          const lastItem = this.at(this.#stack, -1);
          const secondLastItem = this.at(this.#stack, -2);

          const result = this.ops[op](secondLastItem, lastItem);

          this.#stack.splice(-2, 2, Math.floor(result));
          break;
        case "dup":
        case "drop":
        case "swap":
        case "over":
          this.#stack = this.ops[op](this.#stack);
        default:
          break;
      }
      return;
    });
  }

  get stack() {
    return this.#stack;
  }
}
