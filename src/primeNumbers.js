/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  const primeNumbers = [2];

  for (let i = 3; i <= highestNumber; i++) {
    let prime = true;
    for (let n of primeNumbers) {
      if (i % n === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primeNumbers.push(i);
    }
  }

  return (min, max) => primeNumbers.filter(it => min <= it && it <= max);
};
