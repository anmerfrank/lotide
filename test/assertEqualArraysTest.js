const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns ['hello'] for ['hello']", () => {
    assert.strictEqual(assertArraysEqual(['hello'], ['hello'])); 
  });
  
});



// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //  pass
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); //should fail

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
