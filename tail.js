//Import



 
//Function

let arrayTwo = [];
const tail = function(arr) {
  for (let i = 1; i < arr.length; i++)
    arrayTwo.push(arr[i]);
  return arrayTwo;
};



//Export

module.exports = tail;