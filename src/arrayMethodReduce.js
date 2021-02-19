'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedValue = initialValue;
    let startIndex = 0;

    if (!(typeof callback === 'function')) {
      return undefined;
    }

    if (typeof initialValue === 'undefined') {
      reducedValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      reducedValue = callback(reducedValue, this[i], i, this);
    }

    return reducedValue;
  };
}

module.exports = applyCustomReduce;
