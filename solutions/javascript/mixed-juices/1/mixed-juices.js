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
  switch(name){
    case "Pure Strawberry Joy":
      return(0.5)
    case "Energizer" :
        return(1.5)
    case "Green Garden" :
        return(1.5)
      case "Tropical Island" :
        return(3)
      case "All or Nothing" :
        return(5)
      break;
      default:
        return(2.5);
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
  //uses a do while loop to start with the first item 
  //until count =wedgesNeeded or limes[i]is empty(null)
  // variables :i,wedges
  // if limes[i] == 'small' { wedges = 6}
  //   if limes[i] == 'medium' { wedges = 8}
  //   if limes[i] == 'large' { wedges = 10}
  let i=0;
  let wedges =0;
  while (wedges<wedgesNeeded &&limes[i] != null){
    switch(limes[i]){
    case "small":
      wedges=wedges+6
        break;
    case "medium" :
        wedges=wedges+8
        break;
    case "large" :
        wedges=wedges+10
        break;
  }
    i++
}
  return i ;
}
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  let time;
  do {
    // if (orders[i] == null) break;
    switch (orders[i]) {
      case 'Pure Strawberry Joy':
        time = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        time = 1.5;
        break;
      case 'Tropical Island':
        time = 3;
        break;
      case 'All or Nothing':
        time = 5;
        break;
      default:
        time = 2.5;
    }
    timeLeft -= time;
    orders.shift();
  } while (timeLeft > 0 && orders[i] !== null);
  return orders;
}
