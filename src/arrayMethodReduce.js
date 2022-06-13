'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const array = this;
    let previousValue = this[0];
    let startIndex = 1;

    if (arguments.length > 1) {
      previousValue = initialValue;
      startIndex = 0;
    }

    for (let index = startIndex; index < array.length; index++) {
      const value = array[index];

      previousValue = callback(previousValue, value, index, array);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
