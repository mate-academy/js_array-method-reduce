'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    const prev = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (prev.length === 0) {
        prev[0] = this[i];
        i++;
      }

      prev[0] = callback(prev[0], this[i], i, this);
    }

    return prev[0];
  };
}

module.exports = applyCustomReduce;
