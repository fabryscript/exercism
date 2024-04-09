//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Matrix<T> {
  private _matrix: T[][] = [];

  constructor(initial: T[][]) {
    this._matrix = initial;
  }

  pushRow(row: T[]) {
    this._matrix.push(row);
  }

  getIndexByItem(item: T, col: number = 0) {
    let columnIndex = -1;

    for (let i = this._matrix.length - 1; i >= 0; i--) {
      if (this._matrix[i][col] === item) {
        columnIndex = i;
        break;
      }
    }

    return columnIndex;
  }

  getValue(key: T): T | undefined {
    const row = this._matrix[this.getIndexByItem(key, 0)];
    if (row) return row[1];
  }

  getKey(value: T): T | undefined {
    const row = this._matrix[this.getIndexByItem(value, 0)];

    if (row) return row[0];
  }

  get() {
    return this._matrix;
  }
}

export class Forth {
  private _stack: number[] = [];

  ops = {
    "+": (x: number, y: number) => x + y,
    "-": (x: number, y: number) => x - y,
    "/": (x: number, y: number) => {
      if (y === 0) {
        throw new Error("Division by zero");
      }

      return x / y;
    },
    "*": (x: number, y: number) => x * y,
    dup: (s: typeof this._stack) => {
      if (s.length === 0) {
        throw new Error("Stack empty");
      }
      s.push(this.at(s, -1));
      return s;
    },
    drop: (s: typeof this._stack) => {
      if (s.length === 0) {
        throw new Error("Stack empty");
      }
      s.pop();
      return s;
    },
    swap: (s: typeof this._stack) => {
      if (s.length < 2) {
        throw new Error("Stack empty");
      }
      const secondLastElement = this.at(s, -2);
      const lastElement = this.at(s, -1);

      s.splice(-2, 2, lastElement, secondLastElement);

      return s;
    },
    over: (s: typeof this._stack) => {
      if (s.length < 2) {
        throw new Error("Stack empty");
      }
      const secondLastElement = this.at(s, -2);

      s.push(secondLastElement);

      return s;
    },
  };

  aliases = new Matrix<string>([
    ["+", "+"],
    ["-", "-"],
    ["/", "/"],
    ["*", "*"],
    ["dup", "dup"],
    ["drop", "drop"],
    ["swap", "swap"],
    ["over", "over"],
  ]);

  constructor() {
    this._stack = [];
  }

  /**
   * Gets an item of an array based by an index which could also be negative
   * @param input The input string or array
   * @param i the index, which can also be negative
   * @returns The item of the array or string
   */
  at(input: string | any[], i: number) {
    const idx = i < 0 ? (i + input.length) % input.length : i;
    return input[idx];
  }

  evaluate(_input: string) {
    const input = _input.toLowerCase().trim();
    /**
     * This means that the word is a new alias definition
     */
    if (input[0] === ":" && this.at(input, -1) === ";") {
      const trimCommand = input.replace(/[:;]/g, "").trim();
      const split = trimCommand.split(" ");

      const name = split[0];
      if (!Number.isNaN(+name)) throw new Error("Invalid definition");
      split.shift();

      const replacedCommand = split.map((keyword) => {
        if (!Number.isNaN(+keyword)) return keyword;

        // We are searching if there is a column with the keyword value
        if (this.aliases.getKey(keyword)) {
          return this.aliases.getValue(keyword);
        }

        return keyword;
      });

      const command = replacedCommand.join(" ");

      this.aliases.pushRow([name, command]);
      return;
    }

    const replacedInput = input
      .split(" ")
      .map((keyword) => {
        if (Number.isInteger(+keyword)) return keyword;

        const correspondingCommand = this.aliases.getValue(keyword);

        if (!correspondingCommand) {
          throw new Error("Unknown command");
        }

        return correspondingCommand;
      })
      .join(" ")
      .split(" ");

    replacedInput.forEach((_word) => {
      /**
       * This means that the word is a number and that we should push
       * it into the stack
       */
      if (!Number.isNaN(+_word)) {
        return this._stack.push(+_word);
      }
      /**
       * This means that the word is an operation
       */
      const op = _word as keyof typeof this.ops;
      switch (op) {
        case "+":
        case "-":
        case "/":
        case "*":
          /**
           * An operation should ideally be performed on the last two
           * items of the stack
           */
          if (this._stack.length < 2) {
            throw new Error("Stack empty");
          }

          const lastItem = this.at(this._stack, -1);
          const secondLastItem = this.at(this._stack, -2);

          const result = this.ops[op](secondLastItem, lastItem);

          this._stack.splice(-2, 2, Math.floor(result));
          break;
        case "dup":
        case "drop":
        case "swap":
        case "over":
          this._stack = this.ops[op](this._stack);
        default:
          break;
      }
      return;
    });
  }

  get stack() {
    return this._stack;
  }
}

const forth = new Forth();
forth.evaluate(": SWAP DUP Dup dup ;");
forth.evaluate("1 swap");

console.log(forth.stack);
