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


/// END OF ASSERT EQUAL FUNCTIONS ///

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["lost", "like", "tears", "in", "rain"];
const nums = [3, 5, 7, 9, 12];
const flowers = ["rose", "sunflower", "nasturtium", "snapdragon"];


const map = function(array, callback){ 
  const results = []; 
  for (let item of array){
    results.push(callback(item));
  }
  return results;
};


const results1 = map (words, word => word[0]);
const results2 = map (words2, word => word);
const results3 = map (nums, num => num * 3);
const results4 = map (flowers, flower => flower + "s");


assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // this checks out
assertArraysEqual(results2, ["lost", "like", "tears", "in", "rain"]);
assertArraysEqual(results3, [9, 15, 21, 27, 36]);
assertArraysEqual(results4, ["roses", "sunflowers", "nasturtiums", "snapdragons"]);