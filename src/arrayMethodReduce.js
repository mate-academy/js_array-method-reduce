'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let stepValue = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      stepValue = this[0];
      index = 1;
    }

    for (index; index < this.length; index++) {
      stepValue = callback(stepValue, this[index], index, this);
    }

    return stepValue;
  };
}

module.exports = applyCustomReduce;
