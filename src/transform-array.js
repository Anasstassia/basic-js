import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
 * 
 * --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

 */
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  let discarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (discarded) {
      discarded = false;
      continue;
    }
    const el = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];

    if (el === "--discard-next" && next) {
      discarded = true;
      i = i + 1;
    } else if (el === "--discard-prev" && prev) {
      result.pop();
    } else if (el === "--double-next" && next) {
      result.push(next);
    } else if (el === "--double-prev" && prev) {
      result.push(prev);
    } else if (
      ![
        "--discard-next",
        "--discard-prev",
        "--double-next",
        "--double-prev",
      ].includes(el)
    ) {
      result.push(el);
    }
  }
  return result;
}
