//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let final = ""
  
  if (num % 3 == 0) {
    final += "Pling"
  }
  
  if (num % 5 == 0) {
    final += "Plang"
  }
  
  if (num % 7 == 0) {
    final += "Plong"
  }

  if (final === "") {
    final = `${num}`
  }
  
  return final;
};
