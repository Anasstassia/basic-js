import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // let max = 0;
  // // let digits = [...`${n}`];
  // let digits = n.toString().split("");
  // for (let i = 0; i < digits.length; i++) {
  //   let newMax = parseInt(digits.filter((el, index) => index !== i).join(""));
  //   if (newMax > max) {
  //     max = newMax;
  //   }
  // }
  // return max;

  let res = "";
  let a = n
    .toString()
    .split("")
    .map((item) => Number(item));
  let b = a.indexOf(Math.min(...a));
  for (let i = 0; i < a.length; i++) {
    if (i != b) {
      res += a[i];
    }
  }
  return +res;
}
