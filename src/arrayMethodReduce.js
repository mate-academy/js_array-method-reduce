'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const firstIndex = arguments.length > 1 ? 0 : 1;
    let acumulator = arguments.length > 1 ? initialValue : this[0];

    for (let i = firstIndex; i < this.length; i++) {
      acumulator = callback(acumulator, this[i], i, this);
    }

    return acumulator;
  };
}

module.exports = applyCustomReduce;
