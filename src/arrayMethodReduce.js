'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accum;

    if (arguments.length === 1) {
      if (typeof (this[0]) === 'string') {
        accum = '';
      } else if (typeof (this[0]) === 'number') {
        accum = this[0];
      }
    } else {
      accum = initialValue;
    }

    switch (callback.length) {
      case 2: {
        for (let i = 0; i < this.length; i++) {
          accum = callback(accum, this[i]);
        }
        break;
      }

      case 3: {
        for (let i = 0; i < this.length; i++) {
          accum = callback(accum, this[i], i);
        }
        break;
      }

      case 4: {
        for (let i = 0; i < this.length; i++) {
          accum = callback(accum, this[i], i, this);
        }
        break;
      }
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
