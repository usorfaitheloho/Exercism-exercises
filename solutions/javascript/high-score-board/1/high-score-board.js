/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
return (
  {
    "The Best Ever": 1000000
  }
)
}


export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
 delete scoreBoard[player];
  return scoreBoard
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
}

export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
     let bonus_points = 100;
     scoreBoard[key]+=bonus_points
  }
  return scoreBoard
}

export function normalizeScore(params) {

   const { score, normalizeFunction } = params;
  return normalizeFunction(score);
}
