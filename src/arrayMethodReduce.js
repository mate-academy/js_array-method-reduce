'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (result === undefined) {
        if (arguments.length === 1) {
          result = this[i];
          continue;
        } else {
          result = 'undefined';
        }
      }
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
