'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startPoint = 0;
    let box = initialValue;

    if (initialValue === undefined) {
      startPoint = 1;
      box = this[0];
    }

    for (let i = startPoint; i < this.length; i++) {
      box = callback(box, this[i], i, this);
    }

    return box;
  };
}

module.exports = applyCustomReduce;
