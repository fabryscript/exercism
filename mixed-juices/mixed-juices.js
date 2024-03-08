// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let i = 0;
  
  while (wedgesCut < wedgesNeeded) {
    if (limes[i]) {
      switch (limes[i]) {
        case "small":
          wedgesCut += 6;
          i++
          break;
        case "medium":
          wedgesCut += 8;
          i++
          break;
        case "large":
          wedgesCut += 10;
          i++
          break;
        default:
          break;
      }
    } else {
      return i;
    }
  }

  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let totalTimeNeeded = 0;
  let i = 0;
  let impossibleOrders = []
  
  do {
    const timeNeededForJuice = timeToMixJuice(orders[i])
    totalTimeNeeded += timeNeededForJuice;
    i++;
  } while (totalTimeNeeded < timeLeft)

  orders.splice(0, i)
  
  return orders;
}
