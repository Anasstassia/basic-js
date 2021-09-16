import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (!str) return str;
  let currentLetter = str[0];
  let counter = 0;
  let res = [];
  for (let el of str) {
    if (el === currentLetter) {
      counter++;
    } else {
      res.push(`${counter > 1 ? counter : ""}${currentLetter}`);
      currentLetter = el;
      counter = 1;
    }
  }
  res.push(`${counter > 1 ? counter : ""}${currentLetter}`);
  return res.join("");
}
