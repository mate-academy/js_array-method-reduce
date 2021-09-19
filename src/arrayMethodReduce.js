'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let item = initialValue;

    if (arguments.length < 2) {
      start = 1;
      item = this[0];
    }

    for (let i = start; i < this.length; i++) {
      item = callback(item, this[i], i, this);
    }

    return item;
  };
}

module.exports = applyCustomReduce;
