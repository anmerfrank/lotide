
// Equal Array checker

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Assert Equal Array:

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are not equal.");
  }
};

//Without

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  console.log(source);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // these arrays are equal.
