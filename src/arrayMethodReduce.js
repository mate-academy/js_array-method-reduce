'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const enoughArgs = arguments.length > 1;

    const startIndex = enoughArgs ? 0 : 1;

    let prev = enoughArgs ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
