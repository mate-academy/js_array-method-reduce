'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let valueReduce = arguments.length < 2 ? this[0] : initialValue;
    let i = arguments.length < 2 ? 1 : 0;

    for (i; i < this.length; i++) {
      valueReduce = callback(valueReduce, this[i], i, this);
    }

    return valueReduce;
  };
}

module.exports = applyCustomReduce;
