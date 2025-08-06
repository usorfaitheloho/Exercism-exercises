// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
let string1= array1.join('');
let string2= array2.join('');

return Number(string1)+ Number(+string2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = String(value)
  let palindrome = string.split("").reverse().join("")
 return (palindrome == value)? true: false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // if (input === '' || null || undefined ) 
  if (Boolean(input) === false){
    return 'Required field'
  }
  let number = Number(input)
 if ( Boolean(number) === false){
    return 'Must be a number besides 0'
  }
  return ''
}
