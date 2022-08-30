'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = '';
    let startValue = '';

    if (arguments.length === 1) {
      if (typeof this[0] === 'number') {
        startValue = this[0];
        result = 0;
      }
    } else {
      if (initialValue === undefined) {
        result = 'undefined';
      } else {
        result = startValue = initialValue;
      }
    }

    for (let i = 0; i < this.length; i++) {
      result += callback(startValue, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
