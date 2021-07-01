'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let accumulator = initialValue;

    if (arguments.length === 1) {
      startIndex = 1;
      accumulator = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };

  const operation = (accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
  };

  return [].__proto__.reduce2(operation);
}

module.exports = applyCustomReduce;
