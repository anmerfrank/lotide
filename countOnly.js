

//Assert Equal Array:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These are equal.");
  } else {
    console.log("These are not equal.");
  }
  
};

//CountOnly function below

const countOnly = function(names, namesToCount) {
  let result = {};
  for (let name of names) {
    if (result[name]) {
      result[name] += 1;
    } else if (namesToCount[name]) { // if it's a name we want to count, we need to initialize the value before we can increment it. Otherwise it doesn't exist.
      result[name] = 1;
    }
  }
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], undefined);


// PSEUDOCODE from morning lecture
// function countWords(sentence) => object/map/aa
// split the sentence by space (str => array of words)
// start with an empty results table / object
// loop through the words => word
// if word in results, then increase its value by 1
// else add it to results with a value of 1
// return results