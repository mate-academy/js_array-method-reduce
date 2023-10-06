'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function (callback, initialValue) {
    if (this.length === 0) {
      return initialValue || 0;
    }

    let start = 1;
    let acumulator = this[0];

    if (arguments.length > 1) {
      start = 0;
      acumulator = initialValue;
    }

    for (let i = start; i < this.length; i++) {
      acumulator = callback(acumulator, this[i], i, this);
    }

    return acumulator;
  };
};

module.exports = applyCustomReduce;
