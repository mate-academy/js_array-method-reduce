'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = '') {
    let start = initialValue;

    if (typeof this[0] === 'number') {
      start = 0;
    }

    let result = start;

    for (let i = 0; i < this.length; i++) {
      result += callback(start, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
