const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


// TEST CODE


middle([1, 2]);
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]