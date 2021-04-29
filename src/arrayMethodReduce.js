'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev;

    if (typeof initialValue !== 'undefined') {
      prev = initialValue;

      for (let i = 0; i < this.length; i++) {
        prev = callback(prev, this[i], i, this);
      }
    } else {
      prev = this[0];

      for (let i = 1; i < this.length; i++) {
        prev = callback(prev, this[i], i, this);
      }
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
