'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    if (this.length === 0) {
      return initialValue;
    }

    let result = '';

    if (typeof initialValue === 'number') {
      result = 0;
    }

    for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
