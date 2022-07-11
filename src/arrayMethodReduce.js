'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let count = initialValue === undefined ? undefined : initialValue;

    if (count || count === 0) {
      for (let i = 0; i < this.length; i++) {
        count = callback(count, this[i], i, this);
      }
    } else {
      count = this[0];

      for (let i = 1; i < this.length; i++) {
        count = callback(count, this[i], i, this);
      }
    }

    if (initialValue === undefined && arguments.length > 1) {
      count = 'undefined';

      for (let i = 0; i < this.length; i++) {
        count = callback(count, this[i], i, this);
      }
    }

    return count;
  };
}

module.exports = applyCustomReduce;
