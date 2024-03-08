//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const LOWERCASE_ALPHABET = "abcdefghijklmnopqrstuvwxyz"

export const isPangram = (phrase) => [...LOWERCASE_ALPHABET].every(alphabetLetter => phrase.toLowerCase().includes(alphabetLetter))