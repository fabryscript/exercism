//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
  const triangle = []

  if (rows === 0) return [];
  if (rows === 1) return [[1]]

  for (let i = 1; i <= rows; i++) {
    let newRow = []
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        newRow.push(1)
      } else {
        const prevRow = triangle[i - 2]
        newRow.push(prevRow[j - 1] + prevRow[j])
      }
    }
    triangle.push(newRow)
  }

  return triangle
};
