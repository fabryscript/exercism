//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function squareRoot(number) {
  for (let i = 0; i <= number; i++) {
    if (number / i === i) return i
  }
}

/**
* ex: num = 25; i = 0
* num / (1, 2, 3, 4) !== i, therefore its not its square root
* num / 5 === i, found it!
**/