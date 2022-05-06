'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const arr = Object(this);
    let value;
    let index;

    if (arguments.length > 1) {
      value = initialValue;
      index = 0;
    } else {
      value = arr[0];
      index = 1;
    }

    for (let i = index; i < arr.length; i++) {
      value = callback(value, arr[i], i, arr);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
