'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {

    let accumulator;

    if (arguments.length === 2) {
      accumulator = initialValue;

      findResult(0, this);
    } else {
      accumulator = this[0];

      findResult(1, this);
    }

    function findResult(start, input) {
      for (let i = start; i < input.length; i++) {
        accumulator = callback(accumulator, input[i], i, input);
      }
    }

    return accumulator;
  };

}

module.exports = applyCustomReduce;
