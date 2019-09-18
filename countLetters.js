
//Assert Equal Array:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These are equal.");
  } else {
    console.log("These are not equal.");
  }
  
};

//CountLetters function below

const countLetters = function(givenString) {
  let result = {};
  for (let letter of givenString) {
    if (letter === " ") {
      continue;
    } else if (result[letter]) {
      result[letter] += 1;
    } else if (!result[letter]) { // if it's a letter we want to count, we need to initialize the value before we can increment it. Otherwise it doesn't exist.
      result[letter] = 1;
    }
  }
  return result;
};


const result1 = countLetters("lighthouse in the house");

// console.log(result1);

assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["l"], 1);