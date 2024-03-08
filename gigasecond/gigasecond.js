//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND = 1e9

export const gigasecond = (date) => {
  const dateInSeconds = date.getTime() / 1000
  const newDate = new Date((dateInSeconds + GIGASECOND) * 1000)
  return newDate
};
