'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = this[0];

    if (initialValue === undefined) {
      for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }

      return result;
    }

    for (let i = 0; i < this.length; i++) {
      // eslint-disable-next-line no-param-reassign
      initialValue = callback(initialValue, this[i], i, this);
    }

    return initialValue;
  };
}

module.exports = applyCustomReduce;
