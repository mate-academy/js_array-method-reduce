'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let previous = this[0];
    let current;
    let start = 0;

    function loopFunc(arr, startValue) {
      for (let i = startValue; i < arr.length; i++) {
        current = arr[i];
        previous = callback(previous, current, i, arr);
      }
    }


    if (arguments.length > 1 && arguments[1] !== undefined) {
      previous = initialValue;

      loopFunc(this, start);
    } else if (arguments.length > 1 && arguments[1] === undefined) {
      previous = 'undefined';

      loopFunc(this, start);
    } else {
      start = 1;
      loopFunc(this, start);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
