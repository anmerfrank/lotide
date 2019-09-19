// Assert Equal checker
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These values are equal.");
  } else {
    console.log("These values are not equal.");
  }
};


// eqArrays Checker

const eqArrays = function(actual, expected) {
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
  for (const key of obj1){
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
      if (!eqArrays(obj1[key], obj2[key])){
        return false;
        } 
    }
    if (obj1[key] !== obj2[key]){
      return false;
    }
    }
    return true;
  }


// TEST CODE


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false