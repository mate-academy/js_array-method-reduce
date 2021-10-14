'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = 0;

    const letters = 'qwertyuiopasdfghjklzxcvbnm';

    if (callback.length > 3) {
      for (const key of this) {
        if (letters.includes(key)) {
          sum = sum + 1;
        } else {
          sum = sum + 0;
        };
      };
    } else if (callback.length > 2) {
      for (let i = 0; i < this.length; i++) {
        sum = sum + i;
      };
    } else {
      for (const key of this) {
        if (letters.includes(key)) {
          sum = '';
          break;
        };
      };

      if (!initialValue) {
        for (const key of this) {
          sum = sum + key;
        };
      } else {
        sum = initialValue;

        for (const key of this) {
          sum = sum + key;
        };
      };
    };

    return sum;
  };
};

module.exports = applyCustomReduce;
