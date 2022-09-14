'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      i = 1;
      result = this[0];
    }
    
    // if (arguments.length === 2 && ) {
    //   i = 1;
    //   result = this[0];
    // }









    for (i; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
