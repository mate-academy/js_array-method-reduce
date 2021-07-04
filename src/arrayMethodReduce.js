'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let resultReduce = initialValue;
    let i = arguments.length === 1 ? 1 : 0;

    for (; i < this.length; i++) {
      resultReduce = callback(resultReduce, this[i], i, this);
    }

    return resultReduce;
  };
}

module.exports = applyCustomReduce;
