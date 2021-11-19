'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let tempResultCallback = initialValue;

    if (arguments.length === 1) {
      tempResultCallback = this[0];

      for (let i = 1; i < this.length; i++) {
        tempResultCallback = callback(tempResultCallback, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        tempResultCallback = callback(tempResultCallback, this[i], i, this);
      }
    }

    return tempResultCallback;
  };
}

module.exports = applyCustomReduce;
