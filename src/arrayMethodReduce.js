'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultReduce = initialValue;
    if (arguments.length === 1) {
      resultReduce = typeof this[0] === 'number' ? this[0] : '';
    }
    for (let i = 0; i < this.length; i++) {
      resultReduce = callback(resultReduce, this[i], i, this);
    }
    return resultReduce;
  };
}

module.exports = applyCustomReduce;
