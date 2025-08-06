// @ts-check

export function frontDoorResponse(line) {
 return line[0];
}

export function frontDoorPassword(word) {
  let firstLetterCapitalized = word[0].toUpperCase();
  let secondLetterPropercase = word.slice(1).toLowerCase();
  return firstLetterCapitalized + secondLetterPropercase ;
}

export function backDoorResponse(line) {
 let lineWithoutSpace = line.trim();
let lastLetter = lineWithoutSpace.length-1 ;// the position of the last letter
  return lineWithoutSpace[lastLetter];
}

export function backDoorPassword(word) {
 let wordCapitalize = frontDoorPassword(word);
  return  wordCapitalize + "," + " " + "please" ; 
}
