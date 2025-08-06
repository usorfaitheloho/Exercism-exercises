// @ts-check

export function dayRate(ratePerHour) {
  return ratePerHour *8
}
export function daysInBudget(budget, ratePerHour) {
  let day = dayRate(ratePerHour);
  return  Math.floor(budget /day)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let months = Math.floor(numDays/22);// returns only the whole number
  //let daysLeft = numDays%22;
  let daysLeft = numDays-(months*22);
  let monthsCalculated = months *(22*ratePerHour*8*(1-discount)) ;
   let daysLeftCalculated = daysLeft * dayRate(ratePerHour) ;
  return Math.ceil(monthsCalculated + daysLeftCalculated);// rounded to the nearest whole number
}

