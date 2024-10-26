/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = +start;
  end = +end;
  return ((Math.abs(end - start) + 1) * (start + end)) / 2;
};
