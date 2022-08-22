'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let fromInitialValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      fromInitialValue = this[0];
      startIndex++;
    }

    for (let i = startIndex; i < this.length; i++) {
      fromInitialValue = callback(fromInitialValue, this[i], i, this);
    }

    return fromInitialValue;
  };
}

module.exports = applyCustomReduce;
