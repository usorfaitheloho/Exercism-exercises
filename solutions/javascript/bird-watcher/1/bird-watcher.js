// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
   let total=0;
  
   for(let i=0; i< birdsPerDay.length; i++)
   {
      total += birdsPerDay[i]
   
   }
   return total
}


export function birdsInWeek(birdsPerDay, week) {

  let newArray = [] 
  let count = 0
  let sum =0
  for(let i=0; i<birdsPerDay.length; i++){
      sum += birdsPerDay[i]
      count ++
  if(count === 7 ){
      newArray.push(sum)
     count =0
    sum=0
    }
  }
  return newArray[week-1]
}
  
 //  let weekOne=birdsPerDay.slice(0,7);
 // let weekTwo=birdsPerDay.slice(7,14);
  //  let total=0;
  // if (week == 1){
  //   for(let i=0; i< weekOne.length; i++)
  //  {
  //     total += weekOne[i]
 
  //  }
  //  return total
  // }
  //  else {
  //    for(let i=0; i< weekTwo.length; i++)
  //  {
  //     total += weekTwo[i]
  //  }
  //  return total
  //  }


// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// birdsInWeek(birdsPerDay, 2);

export function fixBirdCountLog(birdsPerDay) {
  //1. adds 1 to the first element and skips the next one
   for(let i=0; i<birdsPerDay.length; i=i+2){
      let num =1
      birdsPerDay[i]+=num
      console.log(birdsPerDay)
    }
      return birdsPerDay
}
  
