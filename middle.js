
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

// Returns middle of the array:

const middle = function(arr) {
  let midIndex = [];
  
  if (arr.length > 2 && arr.length % 2 !== 0) {
    midIndex.push(arr[Math.floor(arr.length / 2)]);
  }

  if (arr.length > 2 && arr.length % 2 === 0) {
    midIndex.push(arr[Math.floor(arr.length / 2)]);
    midIndex.push(arr[Math.floor(arr.length / 2 + 1)]);
  }
  console.log(midIndex);
  return midIndex;
  
};

middle([1, 2]);
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);