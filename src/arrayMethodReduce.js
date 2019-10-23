'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulattor, i;
    
    if (arguments.length === 1) {
      accumulattor = this[0];
      i = 1;
    } else {
      accumulattor = initialValue;
      i = 0;
    }

    for (i; i < this.length; i++) {
      accumulattor = callback(accumulattor, this[i], i, this);
    }

    return accumulattor;
  };
}

module.exports = applyCustomReduce;
