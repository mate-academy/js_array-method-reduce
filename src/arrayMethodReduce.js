'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const initialData = arguments.length < 2;
    let startValue = initialData ? this[0] : initialValue;
    const startIndex = initialData ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
