'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let previosValue = initialValue;

    if (arguments.length < 2) {
      previosValue = this[0];
      startIndex = 1;
    };

    for (let i = startIndex; i < this.length; i++) {
      previosValue = callback(previosValue, this[i], i, this);
    }

    return previosValue;
  };
};

module.exports = applyCustomReduce;
