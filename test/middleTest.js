const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE


assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]