'use strict';

/**
 * Implement method Reduce
 */
function isEqual(x1, x2) {
  return x1 === x2 || (Number.isNaN(x1) && Number.isNaN(x2));
}

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let counter = initialValue;
    let startOfIteration = 0;

    if (isEqual(initialValue, undefined)) {
      counter = this[0];
      startOfIteration = 1;
    }

    for (let i = startOfIteration; i <= this.length - 1; i++) {
      counter = callback(counter, this[i], i, this);
    }

    return counter;
  };
}

module.exports = applyCustomReduce;
