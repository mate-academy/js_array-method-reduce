'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let bufer = initialValue;
    let i = 0;

    if (arguments.length === 1) {
      bufer = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      bufer = callback(bufer, this[i], i, this);
    }

    return bufer;
  };
}

module.exports = applyCustomReduce;
