//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export class ResistorColorTrio {
  values = [];

  constructor(values) {
    this.values = values;
  }

  getValue(value) {
    const index = COLORS.indexOf(value);

    if (index !== -1) return index;

    throw new Error("invalid color");
  }

  getScaledTotal(value) {
    if (value >= 1000) {
      return `${value / 1000} kilo`;
    }
    return `${value} `;
  }

  get label() {
    const firstValue = this.getValue(this.values[0]);
    const secondValue = this.getValue(this.values[1]);
    const exp = this.getValue(this.values[2]);

    const total = +`${firstValue}${secondValue}` * +"1".padEnd(exp + 1, "0");

    return `Resistor value: ${this.getScaledTotal(total)}ohms`;
  }
}
