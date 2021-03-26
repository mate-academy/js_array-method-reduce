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

    let resultValue;
    let i;

    if (initialValue !== undefined) {
      resultValue = initialValue;
      i = 0;
    } else {
      resultValue = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      resultValue = callback(resultValue, this[i], i, this);
    }

    return resultValue;
  };
}

module.exports = applyCustomReduce;
