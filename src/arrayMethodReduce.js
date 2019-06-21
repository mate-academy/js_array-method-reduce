'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let result = initialValue;

    let i = initialValue === this[0] ? 1 : 0;
    
    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }
    
    return result;
  };
}

module.exports = applyCustomReduce;
