import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  return matrix.map((row, y) =>
    row.map((el, x) => {
      const xmin1y = row && row[x - 1];
      const xplus1y = row && row[x + 1];

      const xymin1 = matrix && matrix[y - 1] && matrix[y - 1][x];
      const xyplus1 = matrix && matrix[y + 1] && matrix[y + 1][x];
      const xmin1ymin1 = matrix && matrix[y - 1] && matrix[y - 1][x - 1];
      const xplus1yplus1 = matrix && matrix[y + 1] && matrix[y + 1][x + 1];
      const xplus1ymin1 = matrix && matrix[y + 1] && matrix[y + 1][x - 1];
      const xmin1plus1 = matrix && matrix[y - 1] && matrix[y - 1][x + 1];

      const currentValue = [
        xmin1y,
        xplus1y,
        xymin1,
        xyplus1,
        xmin1ymin1,
        xplus1yplus1,
        xplus1ymin1,
        xmin1plus1,
      ].reduce((acc, el) => {
        if (el === true) return acc + 1;
        return acc;
      }, 0);
      return currentValue;
    })
  );
}
