'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length < 1 && !initialValue) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    if ((this.length === 1 && !initialValue)
      || this.length < 1) {
      return initialValue;
    }

    let result;
    let i;

    if (initialValue !== undefined) {
      result = initialValue;
      i = 0;
    } else {
      result = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
