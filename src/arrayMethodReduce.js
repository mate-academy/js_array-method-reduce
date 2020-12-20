'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;

    if (typeof result === 'undefined') {
      if (typeof this[0] === 'string') {
        result = '';
      } else {
        result = 0;
      }
    }

    for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
