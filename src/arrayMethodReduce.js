'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const initialValueUnset = arguments.length === 1;
    let acc = initialValueUnset ? this[0] : initialValue;
    const startIndex = initialValueUnset ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
