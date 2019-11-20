'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let result = 0;
    let accumulator = 0;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      if (typeof this[0] === 'string') {
        result = '';
      }
    } else {
      if (typeof this[0] === 'string') {
        result = '';
        accumulator = '';
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof accumulator === 'number') {
        result = +result;
      }

      result += callback(accumulator, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
