'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let initialValueCopy = arguments.length > 1 ? initialValue : this[0];

    const startIndex = arguments.length > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      initialValueCopy = callback(initialValueCopy, this[i], i, this);
    }

    return initialValueCopy;
  };
}

module.exports = applyCustomReduce;
