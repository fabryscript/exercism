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
  values: string[] = [];

  constructor(values: string[]) {
    this.values = values;
  }

  private getValue(value: string) {
    const index = COLORS.indexOf(value);

    if (index !== -1) return index;

    throw new Error("invalid color");
  }

  private getScaledTotal(value: number) {
    if (value >= 1000) {
      return `${value / 1000} kilo`;
    }
    return `${value} `;
  }

  get label() {
    const firstValue = this.getValue(this.values[0]);
    const secondValue = this.getValue(this.values[1]);
    const exp = 10 ** this.getValue(this.values[2]);

    const total = +`${firstValue}${secondValue}` * exp;

    return `Resistor value: ${this.getScaledTotal(total)}ohms`;
  }
}

console.log(new ResistorColorTrio(["yellow", "violet", "yellow"]).label);
