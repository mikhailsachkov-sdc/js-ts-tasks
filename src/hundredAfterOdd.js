/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 1) {
      arr.splice(++i, 0, 100);
    }
  }
  return arr;
};
