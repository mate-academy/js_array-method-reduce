'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulattor = arguments.length === 1 ? this[0] : initialValue;
    let i = arguments.length === 1 ? 1 : 0;

    for (i; i < this.length; i++) {
      accumulattor = callback(accumulattor, this[i], i, this);
    }

    return accumulattor;
  };
}

module.exports = applyCustomReduce;
