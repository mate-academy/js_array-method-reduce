'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let strartIndex = 0;

    if (arguments.length < 2) {
      prev = this[0];
      strartIndex = 1;
    }

    for (let i = strartIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
};

module.exports = applyCustomReduce;
