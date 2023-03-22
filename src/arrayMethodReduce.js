'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitialValue = arguments.length > 1;
    let resultValue = hasInitialValue ? initialValue : this[0];

    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
      resultValue = callback(resultValue, this[i], i, this);
    }

    return resultValue;
  };
}

module.exports = applyCustomReduce;
