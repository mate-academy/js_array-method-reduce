'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let val = initialValue;
    let index = arguments.length > 1 ? 0 : 1;

    for (index; index < this.length; index++) {
      val = callback(val, this[index], index, this);
    }

    return val;
  };
}

module.exports = applyCustomReduce;
