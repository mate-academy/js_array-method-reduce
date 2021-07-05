'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = this[0];

    if (typeof initialValue === 'number') {
      accumulator = initialValue;
    }

    if (typeof this[0] === 'string') {
      accumulator = '';
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);

      if (isNaN(+accumulator) !== true) {
        accumulator = +accumulator;
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
