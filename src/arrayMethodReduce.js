'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = arguments.length === 2 ? initialValue : this[0];
    const loopFrom = arguments.length === 2 ? 0 : 1;

    for (let i = loopFrom; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
