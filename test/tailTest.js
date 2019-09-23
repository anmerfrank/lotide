const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
const tail = require('../tail');


//Test Code

const input = ["Hello", "Lighthouse", "Labs"];
const result = tail(input);
assertArraysEqual(result, ["Lighthouse", "Labs"]); // should pass



assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
