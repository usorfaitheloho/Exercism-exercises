/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
const [a,...values] = deck;
  return a;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [,b,...values]= deck;
  return b
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
// let firstNum = deck[0];
//   deck[0]= deck[1];
//   deck[1]= firstNum
//   console.log(deck);
  [deck[0], deck[1]] = [deck[1], deck[0]];
  console.log(deck)
  return deck
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
//[1,2,3]
export function discardTopCard(deck) {
  // if(deck.length ===0) return [null,[]];
  const [a,...values] = deck
  console.log(a,values)
    return[a,values]
}

/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
const [a,...values]= deck;
  return [a,...FACE_CARDS,...values]
}
