'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let number = initialValue;

    for (let i = 0; i < this.length; i++) {
      number = callback(number, this[i], i, this);
    }

    return number;
  };
}

module.exports = applyCustomReduce;
