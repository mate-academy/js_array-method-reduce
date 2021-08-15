'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let newInitialValue;
    let startIndex;

    if (initialValue === undefined) {
      if (typeof this[0] === 'string') {
        startIndex = 1;
        newInitialValue = this[0];
      } else {
        startIndex = 0;
        newInitialValue = 0;
      }
    } else {
      startIndex = 0;
      newInitialValue = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      newInitialValue = callback(newInitialValue, this[i], i, this);
    }

    return newInitialValue;
  };
}

module.exports = applyCustomReduce;
