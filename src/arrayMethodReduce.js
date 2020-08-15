'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = this[0];
    let itemIndex = 0;

    (initialValue === undefined)
      ? itemIndex = 1
      : accum = initialValue;

    if (arguments.length < 1) {
      itemIndex = 0;
    }

    for (itemIndex; itemIndex < this.length; itemIndex++) {
      accum = callback(accum, this[itemIndex], itemIndex, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
