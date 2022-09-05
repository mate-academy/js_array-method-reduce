'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = (initialValue === undefined)
      ? String(initialValue) : initialValue;
    let startValue = (initialValue === undefined) ? '' : initialValue;

    if (arguments.length === 1) {
      if (typeof this[0] === 'number') {
        startValue = this[0];
        result = 0;
      } else {
        result = startValue = '';
      }
    }

    for (let i = 0; i < this.length; i++) {
      result += callback(startValue, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
