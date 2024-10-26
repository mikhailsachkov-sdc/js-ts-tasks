/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let n1 = +firstNumber;
  if (isNaN(n1)) n1 = +firstNumber.replaceAll(' ', '');
  let n2 = +secondNumber;
  if (isNaN(n2)) n2 = +secondNumber.replaceAll(' ', '');

  return n1 + n2;
};
