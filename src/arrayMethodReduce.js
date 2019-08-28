'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = undefined) {
    for (let i = 0; i < this.length; i++) {
      if (initialValue !== undefined) {
        // eslint-disable-next-line no-param-reassign
        initialValue = callback(initialValue, this[i], i, this);
      } else {
        // eslint-disable-next-line no-param-reassign
        initialValue = this[i];
      }
    }

    return initialValue;
  };
}

module.exports = applyCustomReduce;
