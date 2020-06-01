'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined && i === 0) {
        acumulator = this[0];
      } else {
        acumulator = callback(acumulator, this[i], i, this);
      }
    }

    return acumulator;
  };
}

module.exports = applyCustomReduce;
