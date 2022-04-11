'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let previous = this[0];
    let current;

    function loopFunc(arr) {
      for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        previous = callback(previous, current, i, arr);
      }
    }

    function loopFuncOne(arr) {
      for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        previous = callback(previous, current, i, arr);
      }
    }

    if (arguments.length > 1 && arguments[1] !== undefined) {
      previous = initialValue;

      loopFunc(this);
    } else if (arguments.length > 1 && arguments[1] === undefined) {
      previous = 'undefined';

      loopFunc(this);
    } else {
      loopFuncOne(this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
