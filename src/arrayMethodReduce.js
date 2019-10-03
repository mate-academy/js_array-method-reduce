'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let rezult = initialValue === undefined ? this[0] : initialValue;
    let i = initialValue === undefined ? 1 : 0;

    for (; i < this.length; i++) {
      rezult = callback(rezult, this[i], i, this);
    }

    return rezult;
  };
}

module.exports = applyCustomReduce;
