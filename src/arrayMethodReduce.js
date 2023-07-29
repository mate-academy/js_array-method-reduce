'use strict';

/**
 * Implement method Reduce
 *
 *
 */

const sourceNumbers = [0, 10, 20, 30];
const sourceStr = ['a', 'b', 'c', 'd'];

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {

    const args = arguments.length;
    const firstArg = this[0];

    function valueCheck(value) {
      if (value === undefined && args === 2) {
        return 'undefined';
      } else if (typeof value === 'string' && value.length === 0) {
        return 'emptyStr'
      } else if (value === 0) {
        return 'zero'
      } else if (typeof firstArg === 'string' && value === undefined) {
        return 'noInitString'
      } else if (typeof firstArg === 'number' && value === undefined) {
        return 'noInitNumber'
      }
      return 'isValid';
    }

    let sum;

    if (valueCheck(initialValue) === 'undefined') {
      sum = 'undefined';
    } else if (valueCheck(initialValue) === "emptyStr") {
      sum = "";
    } else if (valueCheck(initialValue) === "zero") {
      sum = 0;
    } else if (valueCheck(initialValue) === "noInitString") {
      sum = "";
    } else if (valueCheck(initialValue) === "noInitNumber") {
      sum = 0;
    } else if (valueCheck(initialValue) === "isValid") {
      sum = initialValue || this[0];
    }

    for (let i = 0; i < this.length; i++) {
      sum = callback(sum, this[i], i, this)
    }
    return sum;
  };

}

module.exports = applyCustomReduce;
