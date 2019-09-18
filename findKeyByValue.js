
// Equal Array checker


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These values are equal.");
  } else {
    console.log("These values are not equal.");
  }
};


const findKeyByValue = function(genre, value) {
  for (const show in genre) {
    if (genre[show] === value) {
      return show;
    }
  }
};


const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  cartoon: "The Simpsons",
  gritty: "Breaking Bad"
};


//TEST CODE

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"));
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);