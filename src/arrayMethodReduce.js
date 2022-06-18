'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitialValue = arguments.length > 1;
    let prev = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (i === 0 && !hasInitialValue) {
        prev = this[i];
      } else {
        prev = callback(prev, this[i], i, this);
      }
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
