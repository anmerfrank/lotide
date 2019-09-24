const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tailTest", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['2, 3'] for ['1, 2, 3']", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });


});

//Test Code

// const input = ["Hello", "Lighthouse", "Labs"];
// const result = tail(input);
// assertArraysEqual(result, ["Lighthouse", "Labs"]); // should pass



// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
