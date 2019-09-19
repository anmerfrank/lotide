// Assert Equal checker
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐱 🐱 🐱 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😿 😿 😿 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays Checker

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual.indexOf(expected[i]) === -1) {
      return false;
    }
  }
  return true;
};

// eqObjects Checker

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1); // comparing length
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//  AssertObjectsEqual

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (!eqObjects(actual, expected)) {
    console.log(`😿 😿 😿 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else console.log(`🐱 🐱 🐱 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

// TEST CODE


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true -- returns correctly

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false -- returns correctly

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false 

const num1 = {a: "1", b: "4", c: "5"};
const num2 = {a: "6", b: "4", c: "7"};
assertObjectsEqual(num1, num2); // => false 