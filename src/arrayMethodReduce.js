'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    if (this.length < 1 && initialValue === this[0]) {
      return TypeError;
    }

    if ((this.length === 1 && initialValue === this[0])
      || (this.length < 1 && initialValue !== this[0])) {
      return initialValue;
    }

    let result = initialValue;

    if (initialValue === this[0]) {
      for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
