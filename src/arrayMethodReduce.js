'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!arguments) {
      return false;
    }

    let acc = initialValue === undefined ? this[0] : initialValue;
    const index = acc === initialValue ? 0 : 1;

    for (let i = index; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
