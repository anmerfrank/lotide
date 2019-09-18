
//Assert Equal Array: -- NOT ACTUALLY IN USE FOR THIS. Not sure why we were directed to copy it in.

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("These are equal.");
//   } else {
//     console.log("These are not equal.");
//   }
  
// };

//letterPositions function below

//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    } else if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};


const result1 = letterPositions("lighthouse in the house");

console.log(result1);



