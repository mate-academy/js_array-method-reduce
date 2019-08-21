'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultReduce = arguments.length > 1 ? initialValue : this[0];
    const firstValue = arguments.length > 1 ? 0 : 1;

    for (let i = firstValue; i < this.length; i++) {
      resultReduce = callback(resultReduce, this[i], i, this);
    }
    return resultReduce;
  };
}

module.exports = applyCustomReduce;
