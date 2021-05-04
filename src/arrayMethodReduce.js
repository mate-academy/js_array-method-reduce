'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let newInitialValue = initialValue;

    if (initialValue === undefined) {
      newInitialValue = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      newInitialValue = callback(newInitialValue, this[i], i, this);
    }

    return newInitialValue;
  };
}

module.exports = applyCustomReduce;
