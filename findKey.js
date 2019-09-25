// ASSERT EQUAL - COPIED FUNCTIONS

//Equal Arrays function

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};




const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🐱 🐱 🐱 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😿 😿 😿 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// -----

const findKey = (object, callback) => {
  let result = "";
  for (let key in object) {
    if (callback(object[key])) { 
      console.log(key);
      return key;
    }  
  } return undefined;
}
  



// TEST CODE

// assertArraysEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma") // => "noma"

// assertArraysEqual(findKey({
//   "sunflower": { petals: 20 },
//   "rose": { petals: 8},
//   "daisy": { petals: 16},
//   "daffodil": { petals: 7}
// }, x => x.petals === 16), "daisy"); // "daisy" 

