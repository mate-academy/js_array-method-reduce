'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitialValue = arguments.length < 2;
    let prev = hasInitialValue ? this[0] : initialValue;
    const startIndex = hasInitialValue ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
