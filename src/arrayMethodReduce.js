'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;

    if (this) {
      for (let i = 0; i < this.length; i++) {
        if (i === 0) {
          arguments.length > 1
            ? result = initialValue
            : result = this[i++];
        }

        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
