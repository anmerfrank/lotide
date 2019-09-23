const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //  pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); //should fail

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
