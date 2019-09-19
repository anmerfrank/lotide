// Assert Equal checker
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These values are equal.");
  } else {
    console.log("These values are not equal.");
  }
};

// eqObjects Checker

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1); // comparing length
  let obj2 = Object.keys(object2);


  if (obj1.length !== obj2.length) {
    return false;
  }
  return true;
    
  // //COMPARING OBJECT LENGTHS

  for (let i = 0; i < obj1.length; i++) {
    for (let j = 0; j < obj2.length; j++) {
      if (obj1[i] !==  obj2[j]) {
        return false;
      }
    }
  }
  return true;

  for (const key of obj1) {
    if (obj1[key] !==  obj2[key]) {
      return false;
    }
  }
  return true;
};
  


// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));
