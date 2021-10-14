'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = (initialValue !== undefined) ? initialValue : this[0];
    let index = (result === this[0]) ? 1 : 0;

    for (index; index < this.length; index++) {
      result = callback(result, this[index], index, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
