
// Returns middle of the array:

const middle = function(arr) {
  let midIndex = [];
  
  if (arr.length > 2 && arr.length % 2 !== 0) {
    midIndex.push(arr[Math.floor(arr.length / 2)]);
  }

  if (arr.length > 2 && arr.length % 2 === 0) {
    midIndex.push(arr[Math.floor(arr.length / 2) - 1]);
    midIndex.push(arr[Math.floor(arr.length / 2)]);
  }
  console.log(midIndex);
  return midIndex;
  
};


module.exports = middle;