'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (arguments.length === 1 && i === 0) {
        i++;
        acc = this[0];
      }

      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
