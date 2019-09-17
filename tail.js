
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😿 😿 😿 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🐱 🐱 🐱 Assertion Passed: ${actual} === ${expected}`);
  }

};

let arrayTwo = [];
const tail = function(arr) {
  for (let i = 1; i < arr.length; i++)
    arrayTwo.push(arr[1]);
  return arrayTwo;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);