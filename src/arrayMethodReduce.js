'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = '') {
    let sum = initialValue;
    // if given array contains only strings
    let startValue = '';

    if (typeof this[0] === 'number') {
      startValue = 0;
    }

    // when passed two arguments and equal to undefined
    if (arguments.length === 2 && arguments[1] === undefined) {
      sum = undefined;
    }

    // when passed only one argument and type of array is number
    if (arguments.length === 1 && startValue === 0) {
      sum = 0;
    }

    for (let i = 0; i < this.length; i++) {
      // convert to number
      let next = parseInt(callback(startValue, this[i], i, this));

      // handle as string
      if (isNaN(next)) {
        next = callback(startValue, this[i], i, this);
      }
      sum += next;
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
