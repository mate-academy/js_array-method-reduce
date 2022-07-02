'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let current = this[0];

    if (initialValue.length) {
      current = initialValue[0];
    }

    for (let i = 0; i < this.length; ++i) {
      if (!initialValue.length && !i) {
        continue;
      }

      current = callback(current, this[i], i, this);
    }

    return current;
  };
}

module.exports = applyCustomReduce;
