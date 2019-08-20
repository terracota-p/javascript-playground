/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('expect');

const sockMerchant = require('../sockMerchant');

describe('calculate number of matching pairs of socks', function () {
  it('should return 2 matching pairs of socks', function () {
    var numberOfPairs = sockMerchant.sockMerchant(5, [1, 1, 2, 2, 3]);
    console.log(numberOfPairs);
    expect(numberOfPairs).toBe(2);
  });
  it('should return 0 matching pairs of socks', function () {
    var numberOfPairs = sockMerchant.sockMerchant(7, [1, 2, 3, 4, 5, 6, 7]);
    console.log(numberOfPairs);
    expect(numberOfPairs).toBe(0);
  });
  it('should return 2 matching pairs of socks', function () {
    var numberOfPairs = sockMerchant.sockMerchant(7, [1, 2, 3, 4, 3, 2, 7]);
    console.log(numberOfPairs);
    expect(numberOfPairs).toBe(2);
  });
  it('should return 3 matching pairs of socks', function () {
    var numberOfPairs = sockMerchant.sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
    console.log(numberOfPairs);
    expect(numberOfPairs).toBe(3);
  });
});
