'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulated = initialValue;
    let currentElementIndex = 0;

    if (arguments.length < 2) {
      accumulated = this[0];
      currentElementIndex = 1;
    }

    for (let i = currentElementIndex; i < this.length; i++) {
      const currentElement = this[i];

      accumulated = callback(accumulated, currentElement, i, this);
    }

    return accumulated;
  };
};

module.exports = applyCustomReduce;
