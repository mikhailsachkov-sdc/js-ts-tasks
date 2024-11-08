/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let mostMatches = '';
  for (let i = 0; i < str1.length; i++) {
    let matches = '';
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + matches.length] === str2[j]) {
        matches += str2[j];
        if (matches.length > mostMatches.length) {
          mostMatches = matches;
        }
      } else {
        matches = '';
      }
    }
  }
  return mostMatches;
};
