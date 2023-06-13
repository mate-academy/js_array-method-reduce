'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue !== undefined ? initialValue : this[0];
    let loopFrom = initialValue !== undefined ? 0 : 1;

    if (arguments.length === 2 && initialValue === undefined) {
      result = initialValue;
      loopFrom = 0;
    }

    for (let i = loopFrom; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
