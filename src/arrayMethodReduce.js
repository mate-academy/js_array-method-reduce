'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reduceResult = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      reduceResult = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      reduceResult = callback(reduceResult, this[i], i, this);
    }

    return reduceResult;
  };
}

module.exports = applyCustomReduce;
