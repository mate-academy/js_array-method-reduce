'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // return initial value if there isn't any array on enter
    if (this.length === 0) {
      return initialValue;
    }

    // Initialize accumulator variable
    // take first item if only arg1 is thrown
    // and 'undefined' + first item if arg2 = undefined
    // otherwise accumulator = initialValue
    let accumulator = (arguments.length < 2)
      ? this[0]
      : (initialValue === undefined)
        ? undefined + this[0]
        : initialValue;
    // if there isn't initialValue - callback function starts applying
    // from second item otherwise from first
    const startIndex = (initialValue === undefined) ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;

// Loop through the array elements.
// Call the reducer function with the accumulator
// and current element as the arguments.
// Return accumulator after going through all the elements.
