'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2
  = function(reducer, initialValue) {
      let accumulator, currVall, startIndex;

      if (initialValue === undefined) {
        accumulator = this[0];
        startIndex = 1;
      } else {
        accumulator = initialValue;
        startIndex = 0;
      }

      for (let i = startIndex; i < this.length; i++) {
        currVall = this[i];

        accumulator = reducer(accumulator, currVall, i, this);
      }

      return accumulator;
    };
}

module.exports = applyCustomReduce;
