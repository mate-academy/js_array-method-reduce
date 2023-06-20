'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let total = this[0];

    if (typeof initialValue === 'number') {
      total = initialValue;
    } else if (arguments.length > 1) {
      total = initialValue + '';
    }

    const startIndex = arguments.length > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }

    return total;
  };
}

module.exports = applyCustomReduce;
