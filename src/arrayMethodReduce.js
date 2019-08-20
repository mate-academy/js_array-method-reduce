'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (initialValue === undefined) {
      let valueReduce = this[0];

      for (let i = 0; i < this.length; i++) {
        if (i === 0) {
          callback(valueReduce, this[i], i, this);
        } else {
          valueReduce = callback(valueReduce, this[i], i, this);
        }
      }

      return valueReduce;
    } else {
      let valueReduce = initialValue;

      for (let i = 0; i < this.length; i++) {
        valueReduce = callback(valueReduce, this[i], i, this);
      }

      return valueReduce;
    }
  };
}

module.exports = applyCustomReduce;
