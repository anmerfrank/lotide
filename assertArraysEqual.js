//Equal Arrays function

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are not equal.");
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]); //  pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //should fail

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
