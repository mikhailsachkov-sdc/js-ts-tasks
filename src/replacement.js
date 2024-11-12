/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  for (let i = 0; i < arr.length; i++) {
    const abs = Math.abs(arr[i]);
    let to = 4;
    if (abs < 10) {
      to = 1;
    } else if (abs < 100) {
      to = 2;
    } else if (abs < 1000) {
      to = 3;
    }
    arr.splice(i, 1, to);
  }
  return arr;
};
