'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulate = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accumulate = this[0];
      startIndex = 1;
    }

    for (let x = startIndex; x < this.length; x++) {
      accumulate = callback(accumulate, this[x], x, this);
    }

    return accumulate;
  };
}

module.exports = applyCustomReduce;
