'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator = initialValue;
    let argCheck = false;

    if (arguments.length === 1) {
      accumulator = this[0];
      argCheck = true;
    }

    for (let i = 0; i < this.length; i++) {
      if (argCheck) {
        argCheck = false;
        continue;
      }

      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
