'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      // eslint-disable-next-line max-len
      const errorText = 'array must have at least one element or initialValue should be asigned';

      throw new TypeError(errorText);
    }

    let prev = initialValue;
    let current = this[0];
    let start = 0;

    if (arguments.length < 2) {
      prev = this[0];
      current = this[1];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      current = this[i];
      prev = callback(prev, current, i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
