//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 const isThereAMisplacedX = (isbn) => {
   const splitted = isbn.replaceAll("-", "").split("")
   for (let i = 0; i < splitted.length; i++) {
     if (splitted[i] === "X" && i !== 9) {
       return true
     }
   }
 }

export const isValid = (isbn) => {
  if (isbn === null || isbn === "" || isThereAMisplacedX(isbn) ) {
    return false;
  }

  let incrementalResult = 0;
  const numbers = isbn.replaceAll("-", "").split("")
  
  if (numbers.join("").length !== 10) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i] === "X" ? 10 : numbers[i]);
    incrementalResult += number * (10 - i);
  }

  return incrementalResult % 11 === 0;
};
