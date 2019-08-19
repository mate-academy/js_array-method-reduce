'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reduceValue = 0;

    if (typeof initialValue === 'undefined') {
      switch (typeof this[0]) {
        case 'string':
          reduceValue = '';
          break;

        case 'number':
          reduceValue = 0;
          break;
      }
    } else {
      reduceValue = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      reduceValue = callback(reduceValue, this[i], i, this);
    }

    return reduceValue;
  };
}

module.exports = applyCustomReduce;
