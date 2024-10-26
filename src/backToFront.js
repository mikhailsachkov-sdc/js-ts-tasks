/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length < symbolsCount) return str;

  const ch = str.slice(-symbolsCount);
  return str.padStart(str.length + symbolsCount, ch).padEnd(str.length + 2 * symbolsCount, ch);
};
