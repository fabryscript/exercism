class Matrix {
  constructor(initial) {
    this._matrix = [];
    this._matrix = initial;
  }

  pushRow(row) {
    this._matrix.push(row);
  }

  getIndexByItem(item, col = 0) {
    let columnIndex = -1;

    for (let i = this._matrix.length - 1; i >= 0; i--) {
      if (this._matrix[i][col] === item) {
        columnIndex = i;
        break;
      }
    }

    return columnIndex;
  }

  getValue(key) {
    const row = this._matrix[this.getIndexByItem(key, 0)];
    if (row) return row[1];
  }

  getKey(value) {
    const row = this._matrix[this.getIndexByItem(value, 0)];

    if (row) return row[0];
  }

  get() {
    return this._matrix;
  }
}

class Forth {
  constructor() {
    this._stack = [];
    this.ops = {
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
    this.aliases = new Matrix([
      ["+", "+"],
      ["-", "-"],
      ["/", "/"],
      ["*", "*"],
      ["dup", "dup"],
      ["drop", "drop"],
      ["swap", "swap"],
      ["over", "over"],
    ]);
    this._stack = [];
  }

  at(input, i) {
    const idx = i < 0 ? (i + input.length) % input.length : i;
    return input[idx];
  }

  evaluate(_input) {
    const input = _input.toLowerCase().trim();

    if (input[0] === ":" && this.at(input, -1) === ";") {
      const trimCommand = input.replace(/[:;]/g, "").trim();
      const split = trimCommand.split(" ");

      const name = split[0];
      if (!Number.isNaN(+name)) throw new Error("Invalid definition");
      split.shift();

      const replacedCommand = split.map((keyword) => {
        if (!Number.isNaN(+keyword)) return keyword;

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
      if (!Number.isNaN(+_word)) {
        return this._stack.push(+_word);
      }

      const op = _word;
      switch (op) {
        case "+":
        case "-":
        case "/":
        case "*":
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
