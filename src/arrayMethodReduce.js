'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (arguments.length < 1) {
      throw new TypeError('need at least one argument');
    }

    let result = initialValue !== undefined ? initialValue : this[0];
    let i = initialValue !== undefined ? 0 : 1;

    if (this.length === 0 && initialValue === undefined) {
      return 'undefined' + this.join('');
    }

    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
