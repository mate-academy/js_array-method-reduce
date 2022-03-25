'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;

    if (initialValue || initialValue === 0) {
      acc = initialValue;

      for (let index = 0; index < this.length; index++) {
        acc = callback(acc, this[index], index, this);
      }
    } else {
      acc = this[0];

      for (let index = 1; index < this.length; index++) {
        acc = callback(acc, this[index], index, this);
      }
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
