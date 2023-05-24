'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let preValue = initialValue;

    if (arguments.length < 2) {
      preValue = this[0];

      for (let i = 1; i < this.length; i++) {
        preValue = callback(preValue, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        preValue = callback(preValue, this[i], i, this);
      }
    }

    return preValue;
  };
}

module.exports = applyCustomReduce;
