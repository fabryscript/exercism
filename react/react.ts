//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class InputCell {
  #value: number;
  dependants: ComputeCell[] = [];

  constructor(value: number) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  setValue(value: number) {
    if (this.#value !== value) {
      this.#value = value;
      if (this.dependants.length > 0) {
        this.dependants.forEach((dependant) => {
          dependant.update();
          if (dependant.dependants.length > 0) {
            dependant.dependants.forEach((ddep) => {
              ddep.update();
            });
          }
        });
      }
    }
  }
}

type ValueCell = ComputeCell | InputCell;

type CellFn = (inputCells: ValueCell[]) => number;

export class ComputeCell {
  #value: number;
  #fn: CellFn;
  #dependencies: ValueCell[];
  dependants: ComputeCell[] = [];
  callbacks: CallbackCell[] = [];

  constructor(inputCells: ValueCell[], fn: CellFn) {
    this.#value = fn(inputCells);
    inputCells.forEach((cell) => cell.dependants.push(this));
    this.#fn = fn;
    this.#dependencies = inputCells;
  }

  get internalFn() {
    return this.#fn;
  }

  get value() {
    return this.#value;
  }

  update() {
    const newValue = this.#fn(this.dependencies);
    if (this.#value !== newValue) {
      this.#value = newValue;
      this.callbacks.forEach((callbackCell) => {
        callbackCell.trigger();
      });
    }
  }

  get dependencies() {
    return this.#dependencies;
  }

  addCallback(cb: CallbackCell) {
    this.callbacks.push(cb);
    cb.addCell(this);
  }

  removeCallback(cb: CallbackCell) {
    const index = this.callbacks.indexOf(cb);
    if (index !== -1) {
      this.callbacks.splice(index, 1);
    }
  }
}

type CallbackCellFn = (cell: ComputeCell) => any;
export class CallbackCell {
  #cells: ComputeCell[] = [];
  #fn: CallbackCellFn;

  values: unknown[] = [];

  constructor(fn: CallbackCellFn) {
    this.#fn = fn;
  }

  addCell(cell: ComputeCell) {
    this.#cells.push(cell);
  }

  trigger() {
    if (this.#cells.length > 0) {
      this.#cells.forEach((cell) => {
        this.values.push(this.#fn(cell));
      });
    }
  }
}

const inputCell = new InputCell(1);
const plusOne = new ComputeCell([inputCell], (inputs) => inputs[0].value + 1);

const minusOne1 = new ComputeCell([inputCell], (inputs) => inputs[0].value - 1);

const minusOne2 = new ComputeCell([minusOne1], (inputs) => inputs[0].value - 1);

const output = new ComputeCell(
  [plusOne, minusOne2],
  (inputs) => inputs[0].value * inputs[1].value
);

const callback1 = new CallbackCell((cell) => cell.value);
output.addCallback(callback1);

inputCell.setValue(4);

console.log(callback1.values); // Should be [10]
