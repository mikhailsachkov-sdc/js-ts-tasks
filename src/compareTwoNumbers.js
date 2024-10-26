/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  let result = '';

  if (firstNumber > secondNumber) {
    result += '>';
  }
  // its js, so its better leave these if blocks as is (without else block)
  if (firstNumber < secondNumber) {
    result += '<';
  }
  if (firstNumber == secondNumber) {
    result += '=';
  }

  return result;
  // tip: try passing undefined or smth that is not a number as an arg
};
