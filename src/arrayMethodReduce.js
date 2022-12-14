'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previous = this[0];
    const array = this;
    let start = 1;

    if (arguments.length > 1) {
      previous = initialValue;
      start = 0;
    }

    for (let index = start; index < array.length; index++) {
      const value = array[index];

      previous = callback(previous, value, index, array);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
