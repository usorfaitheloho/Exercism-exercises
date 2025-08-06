// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

//return kind === 'car' || kind === 'truck';

export function needsLicense(kind) {
  if ((kind == 'car') || (kind == 'truck')){
    return true
  }
  else return false
}


export function chooseVehicle(option1, option2) {
 if ((option1) < (option2)) {
  return `${option1} is clearly the better choice.`
 }
else {
  return `${option2} is clearly the better choice.`
} 
}

export function calculateResellPrice(originalPrice, age) {
  if (age<3) { return 0.8 * originalPrice} 
  else if (age > 10) { return 0.5 * originalPrice}
  else if( 3>=age < 10) { return 0.7 * originalPrice}
}
