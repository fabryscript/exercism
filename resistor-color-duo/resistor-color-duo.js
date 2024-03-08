//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const _colorIndex = value => COLORS.indexOf(value)

export const decodedValue = (colors) => {
  const [first, second] = colors;
  return Number(`${_colorIndex(first)}${_colorIndex(second)}`);
};

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
  "white"
]