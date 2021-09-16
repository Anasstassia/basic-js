import { NotImplementedError } from "../extensions/index.js";

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const answer = {};
  let N = Math.pow(2, disksNumber) - 1;
  let time = (3600 / turnsSpeed) * N;
  answer.turns = N;
  answer.seconds = Math.floor(time);
  return answer;
}
