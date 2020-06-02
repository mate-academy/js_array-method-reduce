'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const sourceObject = Object(this);
    let accumulator;
    let i = 0;

    if (arguments.length >= 2) {
      accumulator = arguments[1];
    } else {
      while (i < sourceObject.length && !(i in sourceObject)) {
        i++;
      }
      accumulator = sourceObject[i++];
    }

    for (; i < this.length; i++) {
      if (i in sourceObject) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
