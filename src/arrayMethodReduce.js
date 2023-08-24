'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function customReduce(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      return undefined;
    }

    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;

/* {
  if (this.length === 0 && initialValue === undefined) {
    return undefined;
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
} */
