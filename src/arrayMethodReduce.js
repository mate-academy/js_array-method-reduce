'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    const [callback, initialValue] = args;
    let startIndex = 0;
    let result = initialValue;

    if (args.length === 1) {
      startIndex = 1;
      result = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
