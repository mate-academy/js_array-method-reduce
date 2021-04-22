'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;

    if (initialValue === undefined) {
      if (typeof this[0] === typeof 'string') {
        result = '';
      } else if (typeof this[0] === typeof 1) {
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
