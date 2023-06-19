'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function (callback, initialValue) {
    const index = arguments.length > 1 ? 0 : 1;
    let result = arguments.length > 1 ? initialValue : this[0];

    for (let i = index; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
