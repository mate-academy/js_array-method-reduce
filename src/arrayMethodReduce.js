'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  if (!Array.prototype.reduce2) {
    [].__proto__.reduce2 = function(callback, initialValue) {
      let result;

      if (typeof this[0] === 'number') {
        result = initialValue !== undefined ? initialValue : this[0];
      } else if (typeof this[0] === 'string') {
        result = initialValue !== undefined ? initialValue : 'undefined';
      } else {
        result = initialValue;
      }

      if (typeof this[0] === 'string' && initialValue === undefined) {
        // eslint-disable-next-line no-param-reassign
        initialValue = 'undefined';
      }

      for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }

      return result;
    };
  }
}

module.exports = applyCustomReduce;