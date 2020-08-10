'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined && i === 0) {
        i++;
        acc = callback(this[0], this[i], i, this);
      } else {
        acc = callback(acc, this[i], i, this);
      }
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
