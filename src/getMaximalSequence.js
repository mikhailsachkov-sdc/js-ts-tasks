/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let current = arr[0];
  let currentOccurrences = 1;
  let previous = arr[0];
  let previousOccurrences = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === current) {
      currentOccurrences++;
      continue;
    } else if (previousOccurrences < currentOccurrences) {
      previous = current;
      previousOccurrences = currentOccurrences;
    }
    current = arr[i];
    currentOccurrences = 1;
  }

  if (previousOccurrences < currentOccurrences) {
    return Array(currentOccurrences).fill(current);
  } else {
    return Array(previousOccurrences).fill(previous);
  }
};
