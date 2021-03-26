'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = callback(initialValue || 0, this[0], 0, this);

    if (typeof result === 'string') {
      result = result.substring(1);
    }

    for (let i = 1; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
